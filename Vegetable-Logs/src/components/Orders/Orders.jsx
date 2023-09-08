import useOrder from "../../hooks/useOrder";
import { Stack } from "@mui/material";
import OrderItem from "./OrderItem";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import "./orders.css"

const Orders = () => {
    const { uid } = useContext(ShopContext);
    const { orders, error, isLoading } = useOrder(uid);
    
    if(isLoading)
    return 
    <div className="loadingscreen">
    <h1 className="loading">Loading</h1>
    </div>

    return  <>
<div className="order-section">
        <h1>Orders</h1>
        <Stack>
            { orders.map(order => <OrderItem key={order._id} item={order} /> ) }
        </Stack>
        </div>
    </>
};

export default Orders;