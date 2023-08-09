import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import Logo from '../../assets/logo.webp'
import { ShopContext } from '../../context/shop-context'
import {Grid, Button, Container, Typography } from '@mui/material/'
// import {ShoppingCart } from '@mui/material/'
import './ItemView.css'
import vegetableService from "../../services/vegetable-service";

const ItemView = () => {

    const {updateCartItemCount} = useContext(ShopContext);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const params = useParams();

    useEffect(()=>{
        // const pathStr=window.location.pathname.split("/");
        // const id = pathStr[2]

    vegetableService.get(params.id)
    .then((res) => {
      setProduct(
        {...res.data}
        );
        // console.log(product.image)
    })
    .catch((err) => {
      console.log(err,"error");
    });
    },[]);

    const handleQuantity = (param) => {
        console.log()
        if(param === 'decrease' && param > 1){
            setQuantity(quantity -1);
        }
        else if(param ==='increase' && param < 10){
            setQuantity(quantity +1);
        }
    }
    let imgSrc=Logo
    if(product.image && product.image.length){
        imgSrc=product.image[0]
    }
  return (
    <Container className='ProductView' >
        <Grid container spacing={4} >
            <Grid item xs={12} md={8} className="imageWrapper">
                
                {<img
                    // onLoad={()=>{
                    //     setLoading=(false);
                    // }}
                    src={imgSrc}
                    alt={product.name}
                />}
            </Grid>
            <Grid item xs={12} md={8} className="text">
                <Typography variant='h2' >{product.name}</Typography>
                {/* <Typography
                    variant='p'
                    dangerouslySetInnerHTML={product.description}
                /> */}
                <Typography variant='h3'> Price:{product.price}</Typography>
                <Grid container spacing={4} >
                    <Grid item xs={12} >
                        <Button
                            size='small'
                            variant='contained'
                            className='increaseQuant'
                            onClick={()=>{
                                handleQuantity("increase")
                            }}
                        >+</Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant='h3' className="quantity">
                            Quantity:{quantity}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                            size='small'
                            color='secondary'
                            variant='contained'
                            onClick={()=>{
                                handleQuantity("decrease")
                            }}
                        >-</Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                            size='large'
                            className='customButton'
                            onClick={()=>{
                                updateCartItemCount(quantity, params.id)
                            }}
                        >
                            {/* <ShoppingCart /> */}
                            Add to basket
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ItemView