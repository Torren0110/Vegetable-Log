import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import { useState } from "react";
import salesService from "../../services/sales-service";

const SaleItem = ({ item }) => {

    const [edit, setEdit] = useState(false)
    const [ship, setShip] = useState(item.shipped?"shipped":"notShipped")
    const [del, setDel] = useState(item.delivered?"delivered":"notDelivered")
    // const [change, setChange] = useState("")

    const handleSubmit = ()=>{
      if(ship !== (item.shipped?"shipped":"notShipped") ||  del !== (item.delivered?"delivered":"notDelivered")){
        // console.log("triggered")
        salesService.update(item._id, ship, del)
        .then((res) => {
            console.log("res", res.data);
        })
        .catch((err) => {
            console.log("err", err);
        });
      }
      setEdit(false)
    }

    const handleEdit = ()=>{
      setEdit(true)
    }

    const handleChange = (e)=>{
      // console.log(e.target.value)
      if(e.target.value === "shipped" || e.target.value === "notShipped"){
        setShip(e.target.value)
      }
      if(e.target.value === "delivered" || e.target.value === "notDelivered"){
        setDel(e.target.value)
      }
    }

    // console.log(item);
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
            { 
              item.paid? " Paid" : " Not Paid" 
            }
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Shipment Status:
            {
              edit
              ?
              <label htmlFor="shipping">
                <select name="shipping" id="shipping"
                  defaultValue={item.shipped?"shipped":"notShipped"}
                  onChange={handleChange}>
                  <option value="notShipped">Not Shipped</option>
                  <option value="shipped">Shipped</option>
                </select>
              </label>
              :
              item.shipped ? " Shipped":" Waiting for shipment"
            }
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Delivery Status:
            {
              edit
              ?
              <label htmlFor="delivery">
                <select name="delivery" id="delivery"
                  defaultValue={item.delivered?"delivered":"notDelivered"}
                  onChange={handleChange}>
                  <option value="notDelivered">Not Delivered</option>
                  <option value="delivered">Delivered</option>
                </select>
              </label>
              :
              item.delivered ? " Delivered":" Not Delivered"
            }
          </Typography>
          {edit ? <button onClick={handleSubmit} >Update</button>  :  <button onClick={handleEdit} >Edit</button>}
        </>
      }
    />
  </ListItem>)
};

export default SaleItem;