import React, {createContext, useEffect, useState} from 'react'
import vegetableService from "../services/vegetable-service";
import cartService from "../services/cart-service";

const uid="64d4b2d56af8180b0bd5c316"

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{

    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
    cartService.get(uid).then((res) => {
        //console.log("Cart-info:",res.data)
        setCart(res.data);
        })
        .catch((err) => {
            console.log(err, "error in fetching user cart")
        });
    },[cart]);
    
    const addToCart = (vid, qty)=>{
        cartService.addToCart(uid, vid, qty).then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
              console.log(err, "error in fetching user cart")
            });
    }

    const contextValue = {cart,
                        addToCart,
                    }

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}