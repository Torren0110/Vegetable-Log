import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";

const OrderItem = ({ item }) => {
    console.log(item);
    return (<ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src={ item.vegID.image } />
    </ListItemAvatar>
    <ListItemText
      primary= { `${item.vegID.name} X ${item.quantity}` }
      secondary={
        <>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Paid
          </Typography>
          {" — Waiting for shipment"}
        </>
      }
    />
  </ListItem>)
};

export default OrderItem;