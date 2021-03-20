import axios from 'axios'
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL} from '../constants/productConstants'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure()
// get all products action
export const listProducts = (keyword = '',pageNumber = '') => async (dispatch) =>  {
    try {
        
        dispatch({type : PRODUCT_LIST_REQUEST})

        const {data}  = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)

        dispatch({
            type : PRODUCT_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type : PRODUCT_LIST_FAIL,
            error : error.response && error.response.data.message  ? error.response.data.message :error.message
        })
    }
}

// product detail action , get single product
export const listProductDetails = (id) => async (dispatch) => {
    try {
        
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        })

        const {data} = await axios.get(`/api/product/${id}`)

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS, 
            payload:data
        })

    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
         error : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const createProductReview = (productId, review) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })
  
      const {
        auth: { token },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
  
     const {data} =  await axios.post(`/api/product/${productId}/reviews`, review,config)
  
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
        payload : data
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      })
      toast.error('You already reviewed ,you can  review only  comment')
    }
  }