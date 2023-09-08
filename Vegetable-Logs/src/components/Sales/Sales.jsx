import useSales from "../../hooks/useSales";
import { Stack } from "@mui/material";
import SaleItem from "./SaleItem";
import { ShopContext } from "../../context/shop-context";
import { useState, useEffect, useContext } from "react";

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
        <h1>Sales</h1>
        {
            sales.length
            ?
            [<Stack>
                { sales.map(sale => <SaleItem key={sales._id} item={sale} /> ) }
            </Stack>,
            <h5>Total Sale: Rs. ${totalAmt}</h5>]
            :
            <h1>You have no Sales!!</h1>
        }
    </>
}

export default Sales;