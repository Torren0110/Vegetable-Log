import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import "./orders.css"
const OrderItem = ({ item }) => {
    console.log(item);
    return (
      <div className="order-item">

    <ListItem className="list-item">
    <ListItemAvatar className="order-img">
      <Avatar  alt="Remy Sharp" src={ item.vegID.image } />
    </ListItemAvatar>
    <ListItemText
    
      // primary= { `${item.vegID.name} X ${item.quantity}` }
      secondary={
        <>
        <p>{item.vegID.name}</p>
        <p>Quantity: {item.quantity}</p>
          <Typography >
            Paid
          </Typography>
          {" — Waiting for shipment"}
        </>
      }
    />
  </ListItem>
  </div>

  )
};

export default OrderItem;