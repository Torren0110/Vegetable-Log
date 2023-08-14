import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import Logo from '../../assets/logo.webp'
import { ShopContext } from '../../context/shop-context'
import {  Typography } from '@mui/material/'
// import {ShoppingCart } from '@mui/material/'
import './ItemView.css'
import vegetableService from "../../services/vegetable-service";
import sold from "../../assets/smart-bazaar-tag.svg"
import {MdModeEdit} from "react-icons/md"

const ItemView = () => {

    const {addToCart} = useContext(ShopContext);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const params = useParams();

    // useEffect(()=>{
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
    // },[]);

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
    <div  >
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
                <Typography className='rate' variant='h3'> M.R.P: <span className="realprice"> ₹{product.price} </span>(₹{product.price/4}/250 g)(Incl. of all taxes)</Typography>
                <div className='quant' >
                    
                    <div  >
                        <Typography variant='h3' className="quantity">
                            Quantity:
                            <button
                            size='small'
                            variant='contained'
                            className='increaseQuant'
                            onClick={()=>{
                                handleQuantity("increase")
                            }}
                        >+</button>
                            {quantity}
                            <button
                            size='small'
                            color='secondary'
                            variant='contained'
                            className='decreaseQuant'
                            onClick={()=>{
                                handleQuantity("decrease")
                            }}
                        >-</button>
                        </Typography>
                    </div>
                    
                </div>
                <p className='delivery'>Delivery Between 15th Aug to 18th Aug</p>
                <div className="sold">
                <p>Sold by:</p>
<img src={sold} alt="" />
                </div>
                <div className="deliver">
                    <p>Deliver To</p>
                    <div className="address">
                    <p> Dehradun </p>
                    <p>[ 248007 ]</p>
                    <MdModeEdit className='edit' />
                    </div>
                   
                    <div className="stock">
                    <p className='available'>In Stock</p>
                    <p className='date'> Delivery Between 15th Aug to 18th Aug</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemView