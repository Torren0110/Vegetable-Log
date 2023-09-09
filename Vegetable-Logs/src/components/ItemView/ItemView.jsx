import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import Logo from '../../assets/logo.webp'
import { ShopContext } from '../../context/shop-context'
import {  Typography } from '@mui/material/'
import vegetableService from "../../services/vegetable-service";
import cartService from '../../services/cart-service';
// import {MdModeEdit} from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemView.css'

const ItemView = () => {

    const {uid, user, count, setCount} = useContext(ShopContext);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const showToastMessage =(msg) => {
        // console.log("called ",msg)
        if(msg === "success"){
          toast.success('ADDED TO CART !', {
              position: toast.POSITION.BOTTOM_CENTER,
              hideProgressBar: true,
              autoClose: 1000,
              pauseOnHover: false,
          });
        }
        else if(msg === "Invalid request"){
          toast.warning('LOGIN REQUIRED !', {
              position: toast.POSITION.BOTTOM_CENTER,
              hideProgressBar: true,
              autoClose: 1000,
              pauseOnHover: false,
          });
        }
        else{
          toast.error('FAILED TO ADD TO CART !', {
              position: toast.POSITION.BOTTOM_CENTER,
              hideProgressBar: false,
              autoClose: 2000,
              pauseOnHover: false,
          });
        }
        };

    useEffect(()=>{
    vegetableService.get(params.id)
    .then((res) => {
        // console.log(params.id)
        // console.log(res.data)
      setProduct(
        {...res.data[0]}
        );
        // console.log(product.image)
    })
    .catch((err) => {
      console.log(err,"error");
    });
    },[]);

    const addToCart = (vid, qty)=>{
        cartService.addToCart(uid, vid, qty).then((res) => {
            console.log(res.data)
            setCount(count+1)
            showToastMessage("success");
        })
        .catch((err) => {
            // console.log("error :",err.response.data)
            showToastMessage(err.response.data);
        });
    }

    const handleQuantity = (param) => {
        // console.log()
        if(param === 'decrease' && quantity > 1){
            setQuantity(quantity -1);
        }
        else if(param ==='increase' && quantity < product.quantity){
            setQuantity(quantity +1);
        }
    }
    
    let imgSrc=Logo
    if(product.image && product.image.length){
        imgSrc=product.image
    }
  return (
    <div className='singleproduct'>
        <ToastContainer/>
        <div className='ProductView'>
            <div  className="imageWrapper">
                
                {<img
                    // onLoad={()=>{
                    //     setLoading=(false);
                    // }}
                    src={imgSrc}
                    alt={product.name}
                />}
                 <button
                            size='large'
                            className='basketbtn'
                            onClick={()=>{
                                addToCart(params.id, quantity)
                            }}
                        >
                            {/* <ShoppingCart /> */}
                            Add to basket
                        </button>
            </div>
            <div  className="prod-details">
                <Typography className='head' variant='h2' >{product.name} 1 kg</Typography>
                {/* <Typography
                    variant='p'
                    dangerouslySetInnerHTML={product.description}
                /> */}
                <Typography className='rate' variant='h3'> <span className="realprice"> M.R.P:  </span>₹{product.price} (₹{product.price/4}/250 g)(Incl. of all taxes)</Typography>
                <div className='quant' >
                    <div  >
                        <Typography variant='h3' className="quantity">
                         <span> Quantity:</span>  
                            <button
                            size='small'
                            color='secondary'
                            variant='contained'
                            className='decreaseQuant'
                            onClick={()=>{
                                handleQuantity("decrease")
                            }}
                        >-</button>
                            {quantity}
                            <button
                            size='small'
                            variant='contained'
                            className='increaseQuant'
                            onClick={()=>{
                                handleQuantity("increase")
                            }}
                        >+</button>
                            
                        </Typography>
                    </div>
                    
                </div>
                <p className='delivery'>Delivery Between 13th Sept. to 16th Sept.</p>
                <div className="sold">
                <p>Sold by: <span> { product.username }</span></p>
{/* <img src={sold} alt="" /> */}

                </div>
                <div className="deliver">
                    <p>Deliver To:</p>
                    <div className="address">
                    <p> {user.address} </p>
                    
                    </div>
                   
                    <div className="stock">

                    <p className='available'>Status: <span>In Stock</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemView