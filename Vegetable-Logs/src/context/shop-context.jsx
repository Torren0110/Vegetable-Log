import React, {createContext, useEffect, useState} from 'react'
import cartService from "../services/cart-service";
import userService from '../services/user-service';
import { checkToken, clearToken } from '../services/user-service';


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{
    
    const [uid,setUid] = useState("");
    const [cart,setCart] = useState([]);
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
 
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
            setCount(count+1)
        })
        .catch((err) => {
            // console.log(err, "error in fetching user cart")
        });
    }

    const removeAll = ()=>{
        for(const item of cart){
            console.log(item)
            if(item.quantity > 0){
                const newQuant= item.quantity*-1;
                console.log("Sent",item.vegID._id,newQuant)
                addToCart(item.vegID._id,newQuant)
            }
        }
    }

    useEffect(()=>{
        const res = checkToken();
        // console.log("res: ",res)
        setUid(res)
    },[])

    useEffect(()=>{
        userService.getInfo(uid).then((res) => {
          // console.log(res.data);
          setUser(res.data)
        }).catch((err) => {
          // console.log("error", err);
        })
    },[uid])
    
    useEffect(()=>{
        cartService.get(uid).then((res) => {
            //console.log("Cart-info:",res.data)
            setCart(res.data);
            })
            .catch((err) => {
                // console.log(err, "error in fetching user cart")
            });
        },[uid,count]);

    const contextValue = {
                        uid,
                        user,
                        cart,
                        addToCart,
                        setUid,
                        logout,
                        count,
                        setCount,
                        removeAll,
                    }

    return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
}