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
    for(let i=1; products.length+1; i++){
        cart[i] = 0;        
    }
    return cart;
}

export const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState()

    const addToCart = (Itemid)=>{
        setCartItems((prev)=> ({...prev, [Itemid]: prev[Itemid]+1 }))
    }
    const removeFromCart = (Itemid)=>{
        setCartItems((prev)=> ({...prev, [Itemid]: prev[Itemid]-1 }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, products}

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}