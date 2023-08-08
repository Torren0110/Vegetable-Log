import {useState, useEffect} from 'react'
import {Grid, Button, Container, Typography } from '@mui/material/'
import {ShoppingCart } from '@mui/material/Icon/'
import './ItemView.css'
import vegetableService from "./services/vegetable-service";

const createMarkup=(text)=>{
    return {_html: text};
};

const ItemView = () => {

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    vegetableService.get(10)
    .then((res) => {
      setProduct(
        res.data
      );
    })
    .catch((err) => {
      console.log(err);
    });

    // useEffect(()=>{
    //     const id=window.location.pathname.split("/");
    //     fetchProduct(1);
    // },[]);

    const handleQuantity = (param) => {
        if(param=='decrease' && param > 1){
            setQuantity(quantity-1);
        }
        else if(param=='increase' && param < 10){
            setQuantity(quantity+1);
        }
    }

  return (
    <Container className='ProductView' >
        <Grid container spacing={4} >
            <Grid item xs={12} md={8} className="imageWrapper">
                <img
                    // onLoad={()=>{
                    //     setLoading=(false);
                    // }}
                    src={product.src}
                    alt={product.name}
                />
            </Grid>
            <Grid item xs={12} md={8} className="text">
                <Typography variant='h2' >{product.name}</Typography>
                {/* <Typography
                    variant='p'
                    dangerouslySetInnerHTML={createMarkup(product.description)}
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
                                addProduct(product.id, quantity)
                            }}
                        >
                            <ShoppingCart />Add to basket
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ItemView
