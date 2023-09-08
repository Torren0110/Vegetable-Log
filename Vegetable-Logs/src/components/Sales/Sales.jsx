import useSales from "../../hooks/useSales";
import salesService from "../../services/sales-service";
import { Stack } from "@mui/material";
import SaleItem from "./SaleItem";
import { ShopContext } from "../../context/shop-context";
import { useState, useEffect, useContext } from "react";

const Sales = () => {
    const { uid } = useContext(ShopContext)
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

    // salesService.update("64f9c99375942fd862dd9de7", "shipped") => Takes cart ID and status("paid" || "shipped" || "delivered")
    //     .then((res) => {
    //         console.log("res", res.data);
    //     })
    //     .catch((err) => {
    //         console.log("err", err);
    //     });

    console.log(sales)

    return <>
        <h1>Sales</h1>
        <Stack>
            { sales.map(sale => <SaleItem key={sales._id} item={sale} /> ) }
        </Stack>
        Total Sale: Rs. {totalAmt}
    </>
}

export default Sales;