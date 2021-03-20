import axios from 'axios';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants/cartConstants'

export const addToCart = (id,qty) =>async (dispatch,getState) => {

    const {data} = await axios.get(`/api/product/${id}`)

    dispatch({
      type: ADD_TO_CART,
      payload: {
          product: data.product._id,
          name: data.product.name,
          image: data.product.image,
          price: data.product.price,
          countInStock: data.product.countInStock,
          qty
      }
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch,getState) => {

  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })

  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
