import useOrder from "../../hooks/useOrder";
import { Stack } from "@mui/material";
import OrderItem from "./OrderItem";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import './orders.css'

const Orders = () => {
    const { uid } = useContext(ShopContext);
    const { orders, error, isLoading } = useOrder(uid);

    if(isLoading)
    return <h1>Loading</h1>

    // console.log(orders)
    return <>
    <div className="order-section">
        <h1>Orders</h1>
        {
            orders.length
            ?
            <div className="ordermap">
                { orders.map(order => 
                <OrderItem key={order._id} item={order} />
                ) }
            </div>
            :
            <h1 className="ordermsg">You have no orders!!</h1>
        }
        </div>
    </>
};

export default Orders;