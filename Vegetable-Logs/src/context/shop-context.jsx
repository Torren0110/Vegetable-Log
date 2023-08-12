import React, {createContext, useEffect, useState} from 'react'
import vegetableService from "../services/vegetable-service";
import cartService from "../services/cart-service";
import userService from '../services/user-service';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{

    const [cart,setCart] = useState([]);
 
    // const setUser = (param)=>{
    //     const data={
    //         username: param.username,
    //         password: param.password
    //     }
    //     userService.logIn(data)
    //   .then((res) => {
    //     console.log(res.data);
    //     setUid(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    // }
    
    const addToCart = (vid, qty)=>{
        cartService.addToCart(uid, vid, qty).then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
              console.log(err, "error in fetching user cart")
            });
    }

    const [uid,setUid] = useState("64d4b2d56af8180b0bd5c316");
    useEffect(()=>{
        cartService.get(uid).then((res) => {
            //console.log("Cart-info:",res.data)
            setCart(res.data);
            })
            .catch((err) => {
                console.log(err, "error in fetching user cart")
            });
        },[uid,addToCart]);

    const contextValue = {
                        uid,
                        cart,
                        addToCart,
                        setUid,
                    }

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}