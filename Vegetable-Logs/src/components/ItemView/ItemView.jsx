import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/logo.webp'
import { ShopContext } from '../../context/shop-context'
import { Button, Container, Typography } from '@mui/material/'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import './ItemView.css'
import vegetableService from "../../services/vegetable-service";

const ItemView = () => {
    const showToastMessage =(msg) => {
        // console.log("called ",msg)
        if(msg === "success"){
          toast.success('ADDED TO CART !', {
              position: toast.POSITION.BOTTOM_CENTER,
              autoClose: 2000,
              pauseOnHover: false,
          });
        }
        else if(msg === "failed"){
          toast.warning('FAILED TO ADD TO CART !', {
              position: toast.POSITION.BOTTOM_CENTER,
              autoClose: 2000,
              pauseOnHover: false,
          });
        }
    };
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
    <Container className='ProductView' >
        <div className='ItemContainer' >
            <div className="imageWrapper">
                
                {<img
                    // onLoad={()=>{
                    //     setLoading=(false);
                    // }}
                    src={imgSrc}
                    alt={product.name}
                />}
            </div>
            <div className="text">
                <Typography variant='h2' >{product.name}</Typography>
                {/* <Typography
                    variant='p'
                    dangerouslySetInnerHTML={product.description}
                /> */}
                <Typography variant='h3'> Price:{product.price}</Typography>
                <div >
                    <div>
                        <Button
                            size='small'
                            variant='contained'
                            className='increaseQuant'
                            onClick={()=>{
                                handleQuantity("increase")
                            }}
                        >+</Button>
                    </div>
                    <div >
                        <Typography variant='h3' className="quantity">
                            Quantity:{quantity}
                        </Typography>
                    </div>
                    <div>
                        <Button
                            size='small'
                            color='secondary'
                            variant='contained'
                            onClick={()=>{
                                handleQuantity("decrease")
                            }}
                        >-</Button>
                    </div>
                    <div>
                        <Button
                            size='large'
                            className='customButton'
                            onClick={()=>{
                               const msg=addToCart(params.id, quantity)
                               console.log("here", msg)
                            }}
                        >
                            <AddShoppingCartRoundedIcon />
                            Add to basket
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ItemView