import useOrder from "../../hooks/useOrder";
import { Stack } from "@mui/material";
import OrderItem from "./OrderItem";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const Orders = () => {
    const { uid } = useContext(ShopContext);
    const { orders, error, isLoading } = useOrder(uid);

    if(isLoading)
    return <h1>Loading</h1>

    // console.log(orders)
    return <>
        <h1>Orders</h1>
        {
            orders.length
            ?
            <Stack>
                { orders.map(order => <OrderItem key={order._id} item={order} /> ) }
            </Stack>
            :
            <h1>You have no orders!!</h1>
        }
    </>
};

export default Orders;