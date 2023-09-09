import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import salesService from "../../services/sales-service";
import userService from "../../services/user-service";

const SaleItem = ({ item }) => {

    const [edit, setEdit] = useState(false)
    const [stat, setStat] = useState(item.status)
    const [change, setChange] = useState("")
    const [soldTo, setSoldTo] = useState("")

    useEffect(()=>{
      userService.getInfo(item.userID).then((res) => {
        setSoldTo(res.data.username)
      }).catch((err) => {
        // console.log("error", err);
      })
    })

    const handleSubmit = ()=>{
      if(change !== ""){
        // console.log("triggered")
        salesService.update(item._id, change)
        .then((res) => {
            console.log("res", res.data);
            setStat(change)
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
      if(e.target.value !== stat){
        setChange(e.target.value)
        setStat(e.target.value)
      }
    }

    // console.log(item);
    return (
      <div className="saleitem">
  
    <ListItem alignItems="flex-start">
      <div className="sale-item">
    <ListItemAvatar>
      <Avatar style={{ width: '60px', height: '60px', borderRadius:'5px',marginRight:'120px' }} alt="Remy Sharp" src={ item.vegID.image } />
    </ListItemAvatar>
    <ListItemText
      // primary= { `${item.vegID.name} | Qty.: ${item.quantity}  Price: Rs. ${item.vegID.price}` }
      secondary={
        <div className="details">
          <div className="vegdiv">
          <p className="veggiename">{item.vegID.name}</p>
          </div>
          <p className="vegquant">{item.quantity}</p>
          <p className="veggieprice">{item.vegID.price}</p>
        <Typography
            variant="body2"
            color="text.primary"
          >
         <p className="vegsold">{soldTo}</p>  
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            </Typography>
            <div className="vegstatus">
            {
              edit
              ?
              <label htmlFor="shipping">
                <select name="shipping" id="shipping"
                  defaultValue={stat}
                  onChange={handleChange}>
                  <option value="paid">Paid</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </label>
              :
              stat
            }
          </div>
          <div>
          {edit ? <button className="vegbtn" onClick={handleSubmit} >Update</button>  :  <button className="vegbtn" onClick={handleEdit} >Edit</button>}</div>
        </div>
      }
    />
    </div>
  </ListItem>
  </div>)
};

export default SaleItem;