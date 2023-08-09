import React, {createContext, useState} from 'react'
import vegetableService from "../services/vegetable-service";

let products = {}
vegetableService.getAll("").then((res) => {
    products = res.data
    console.log(res.data)
  })
  .catch((err) => {
      console.log(err, "error")
    });

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart = {}
    for(let i=1; i<products.length+1; i++){
        cart[i] = 0;        
    }
    cart[1]=1;
    cart[2]=2;
    return cart;
}

export const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (Itemid)=>{
        setCartItems((prev)=> ({...prev, [Itemid]: prev[Itemid]+1 }))
    }

    const removeFromCart = (Itemid)=>{
        setCartItems((prev)=> ({...prev, [Itemid]: prev[Itemid]-1 }))
    }

    const updateCartItemCount = (newAmt, Itemid)=>{
        setCartItems((prev)=>({...prev, [Itemid]:newAmt}))
    }

    const getTotalCartAmount = ()=>{
        let total=0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = products.find((product)=>product.id === Number(item));
                total += cartItems[item] * itemInfo.price; 
            }
        }
        return total;
    }

    const contextValue = {products,
                        cartItems,
                        addToCart,
                        removeFromCart,
                        updateCartItemCount,
                        getTotalCartAmount}

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}