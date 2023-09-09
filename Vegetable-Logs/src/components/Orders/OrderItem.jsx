import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import './orders.css'


const OrderItem = ({ item }) => {
  
    console.log(item);
    return (
      
      <div className="list-item">
      <ListItem >
    <ListItemAvatar className="order-img">
      <Avatar style={{ width: '130px', height: '120px', borderRadius:'10px' }}  alt="Remy Sharp" src={ item.vegID.image } />
    </ListItemAvatar>
    <ListItemText
      // primary= { `${item.vegID.name} X ${item.quantity}` }
      secondary={
        <div className="order-text">
          <p className="vegiename">{item.vegID.name}</p>
          <p> <span>Quantity:</span>  {item.quantity}</p>
          <Typography
            variant="body2"
            color="text.primary"
          >
          <p > Amount : Rs. </p> 
        <p> <span>Status:</span>  <span className="status">{item.status}</span></p> 
          </Typography>
        </div>
      }
    />
  </ListItem>
  </div>
  
  )
};

export default OrderItem;

