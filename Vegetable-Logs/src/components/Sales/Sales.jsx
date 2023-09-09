import useSales from "../../hooks/useSales";
import { Stack } from "@mui/material";
import SaleItem from "./SaleItem";
import { ShopContext } from "../../context/shop-context";
import { useState, useEffect, useContext } from "react";
import './sales.css'

const Sales = () => {
    const { uid,user } = useContext(ShopContext)
    const { sales, loading, error } = useSales(uid)
    const [totalAmt,setTotalAmt] = useState(0);
    useEffect(()=>{
      let total=0;
      for(const item of sales){
          if(item.quantity > 0){
              let price = item.vegID.price;
              total += item.quantity * price; 
          }
      }
      setTotalAmt(total);
    },[sales]);

    if(!user.seller){
        return <h1> Not a seller account </h1>
    }

    // console.log(sales)
    if(loading)
    return <h1>Loading</h1>

    return <>
<div className="salesdiv">
        <h1>Sales</h1>


        <div >
            <div className="detail">
                <h2>Vegetable</h2>
                <h2>Name</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Sold to</h2>
                <h2>Status</h2>
                <h2>Update</h2>
            </div>
        </div>
        {
            sales.length
            ?
            [<div>
                { sales.map(sale => <SaleItem key={sales._id} item={sale} /> ) }
            </div>,
            <h5>Total Sale: Rs. {totalAmt}</h5>]
            :
            <h1>You have no Sales!!</h1>
        }
</div>
    </>
}

export default Sales;