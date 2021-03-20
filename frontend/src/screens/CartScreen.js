import "./CartScreen.css";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, CssBaseline, Button } from "@material-ui/core";
import {addToCart, removeFromCart} from '../actions/cartActions'

import CartItem from "../components/cartItem/CartItem";


const useStyles = makeStyles((theme) => ({
  cartScreen_left: {
    display: "flex",
      maxWidth: 900,
      height: 600,
      padding: 10,
      backgroundColor: '#222'
  },
  imagesContainer: {
    backgroundColor: "red",
    minWidth: 400,
    height: 412.5,

  },
  cartScreen_right: {
    flex: 0.3,
    backgroundColor:'#934228',

  },
  emptyCart: {
  
    fontSize: 25,
    
  }
 
}));


const CartScreen = ({match,location,history}) => {
    const classes = useStyles()

    const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler =(id) => {
    dispatch(removeFromCart(id))
  }

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  const getCartSubTotal = () => {
    return cartItems.reduce((acc,item)=>acc + item.qty * item.price , 0).toFixed(2)
  }
  const getCartCount = () => {
    return cartItems.reduce((qty,item)=>Number(item.qty) + qty , 0)
  }

  return (
    <Fragment>
    <Layout>
      <CssBaseline />
     <Container maxWidth="lg">
 
     <div className="cartscreen">
 
 
        <div className="cartscreen__left">
     
          <h2>Shopping Cart</h2>
       
         {
           cartItems.length === 0 ? (
             <div className={classes.emptyCart}>
          <Link to="/products">
            <Button style={{ borderRadius: 14, marginLeft: 30 }}>
              <ArrowBackIcon />
              Go back
            </Button>
          </Link>
             <h2 style={{textAlign: 'center'}}> Your Cart Is Empty </h2> 
             <hr />
             </div>
           )  : (
             cartItems.map((product) => (
                <CartItem 
                  key={product.product}
                  product={product}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler = {removeFromCartHandler}
                />
       
              
             )
           ))
         }

        
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <h3>Subtotal ({getCartCount()}) items</h3>
           
            <p>Shipping price : ${12000}</p>
           
            <p style={{fontWeight:600}}>Total price : ${getCartSubTotal()}</p>
          </div>
          <div>
            <button  disabled={cartItems.length === 0} onClick={checkoutHandler}>Proceed To Checkout</button>
          </div>
        </div>
        </div>

        
        
        </Container>
      </Layout>
    </Fragment>
  );
};

export default CartScreen;