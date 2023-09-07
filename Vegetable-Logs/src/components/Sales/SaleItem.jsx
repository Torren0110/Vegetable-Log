import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";

const SaleItem = ({ item }) => {
    console.log(item);
    return (<ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src={ item.vegID.image } />
    </ListItemAvatar>
    <ListItemText
      primary= { `${item.vegID.name} | Qty.: ${item.quantity}  Price: Rs. ${item.vegID.price}` }
      secondary={
        <>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Payment Status:
            { item.paid? " Paid" : " Not Paid" }
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Shipment Status:
            {item.shipped ? " Shipped":" Waiting for shipment"}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Delivery Status:
            {item.delivered ? " Delivered":" Not Delivered"}
          </Typography>
          
        </>
      }
    />
  </ListItem>)
};

export default SaleItem;