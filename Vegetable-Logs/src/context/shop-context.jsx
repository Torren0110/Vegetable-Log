import React, {createContext, useEffect, useState} from 'react'
import cartService from "../services/cart-service";
import { checkToken, clearToken } from '../services/user-service';


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{
    
    const [uid,setUid] = useState("");
    const [cart,setCart] = useState([]);
 
    const logout = ()=>{
        // console.log("called logout")
        clearToken()
        setUid('')
        window.location.reload()
        console.log(uid)
    }
    
    const addToCart = (vid, qty)=>{
        cartService.addToCart(uid, vid, qty).then((res) => {
            console.log(res.data)
            return "error"
          })
          .catch((err) => {
              console.log(err, "error in fetching user cart")
              return "error"
            });
    }
    useEffect(()=>{
        const res = checkToken();
        // console.log("res: ",res)
        setUid(res)
    },[])
    
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
                        logout,
                    }

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}