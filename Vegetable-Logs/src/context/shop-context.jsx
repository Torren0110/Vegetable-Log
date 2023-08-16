import React, {createContext, useEffect, useState} from 'react'
import cartService from "../services/cart-service";
import userService from '../services/user-service';
import { checkToken, clearToken } from '../services/user-service';


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{
    
    const [uid,setUid] = useState("");
    const [cart,setCart] = useState([]);
    const [user, setUser] = useState({});
 
    const logout = ()=>{
        console.log("called logout")
        clearToken()
        setUid('')
        window.location.reload()
        // console.log(uid)
    }
    
    const addToCart = (vid, qty)=>{
        cartService.addToCart(uid, vid, qty).then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            // console.log(err, "error in fetching user cart")
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
                // console.log(err, "error in fetching user cart")
            });

            userService.getInfo(uid).then((res) => {
                // console.log(res.data);
                setUser(res.data)
              }).catch((err) => {
                // console.log("error", err);
              })
        },[uid,addToCart]);

    const contextValue = {
                        uid,
                        user,
                        cart,
                        addToCart,
                        setUid,
                        logout,
                    }

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}