import React, { Fragment } from "react";
import { Grid, Container, CssBaseline } from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import Loader from '../components/loader'
import Product from "../components/product";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import SideBar from "../components/sidebar";
import{ listProducts} from '../actions/productActions'
import Pagination from '../elements/pagination'
toast.configure()

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  sidebarContainer: {
    maxWidth: 250,
    padding: 16,
    minHeight: 400,
    marginRight: 20,
  },
  container: {
    display: "flex",
    marginTop: 60,
  },
}));

const ProductScreen = ({match}) => {
  const classes = useStyles();

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const productDetails = useSelector(state => state.productDetails)
  
  const {product} = productDetails 


  const dispatch = useDispatch()
  
  // product list root reducer daki atadigimiz olacaktir useSelector da böyle yapacagiz
  const productList = useSelector(state => state.productList)
  const {loading ,error,products, pages,page} = productList

  // ACTion olusturdugumuz kullancagimiz sayfaya gelip dispatch daha olusturup on request succesfail actiondaki atiyorsun fonkiso
  useEffect(() => {
    dispatch(listProducts(keyword,pageNumber))
  }, [dispatch,keyword,pageNumber]);


  return (
    <Fragment>
      <Layout>
  
  
      
        <CssBaseline />

        <Container className={classes.container}>
          <div className={classes.sidebarContainer}>
            <SideBar />
          </div>

          <div>
          <h1 style={{ marginLeft: 30 }}>Electronics</h1>
         
         
           <Grid container className={classes.gridContainer} spacing={3}>
             {loading ? 
             <Loader />
           : error ? (
            toast.error(error)
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                product={product}
              />
            ))
          )}
    
           </Grid>
           <Pagination  pages={pages} page={page} keyword = {keyword ? keyword : ''}/>
          </div>
        
        </Container>
    
      </Layout>
    </Fragment>
  );
};

export default ProductScreen;
