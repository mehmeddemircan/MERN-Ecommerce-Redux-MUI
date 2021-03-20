import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

import ProductDetailScreen from "./screens/ProductDetail";
import ProductScreen from "./screens/Products";
import CartScreen from "./screens/CartScreen";
import UpdateProfileScreen from './screens/UpdateProfile'
import { isUserLoggedIn } from "./actions/userActions";
import {useDispatch,useSelector} from 'react-redux'
import  { useState, useEffect } from 'react'
import ProfileScreen from "./screens/ProfileScreen";


function App() {

  
  return (
    <Router>
       
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductScreen} />
        <Route exact path="/product/:id" component={ProductDetailScreen} />
        <Route exact path="/cart/:id?" component={CartScreen} />

        {/* Search keyworkd */}
        <Route exact path="/search/:keyword" component={ProductScreen} />
        <Route exact path="/page/:pageNumber" component={ProductScreen} />
        <Route exact path="/search/:keyword/page/:pageNumber" component={ProductScreen} />
    

        {/* Private route */}
        <Route exact path="/profile/me" component={ProfileScreen} />
        <Route exact path="/profile/update" component={UpdateProfileScreen} />
      </Switch>
    </Router>
  );
}

export default App;
