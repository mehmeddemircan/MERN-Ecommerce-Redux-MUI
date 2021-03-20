import { Link } from "react-router-dom";
import { Container, Header, Row } from "./styles/menuHeader";
import React, { useState, useEffect } from "react";
import {AppBar,Toolbar,IconButton,Typography,InputBase,Badge,MenuItem,Button,Menu} from '@material-ui/core'

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Row>
          <div className="header-item item-left">
            <div className="logo">
              <Link to="/">Verslar</Link>
            </div>
          </div>
          <div className="header-item item-center">
            <div className="menu-overlay"></div>
            <div className="menu">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/new">
                    New <i class="fas fa-angle-down"></i>
                  </Link>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="/images/p1.jpg" alt="new Product" />
                        <h4 className="title">Product 1</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="/images/p2.jpg" alt="new Product" />
                        <h4 className="title">Product 2</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src="/images/p3.jpg" alt="new Product" />
                        <h4 className="title">Product 3</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img src="/images/p4.jpg" alt="new Product" />
                        <h4 class="title">Product 4</h4>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/shop">
                    Shop <i class="fas fa-angle-down"></i>
                  </Link>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      <h4 className="title">Men's Fashion</h4>
                      <ul>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                      </ul>
                      <h4 className="title">Beauty</h4>
                      <ul>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Women's Fashion</h4>
                      <ul>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                        <li>
                          <Link to="#">Product List</Link>
                        </li>
                      </ul>
                      <h4 className="title">Furniture</h4>
                      <ul>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Home, Kitchen</h4>
                      <ul>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                        <li>
                          <Link href="#">Product List</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <img src="/images/shop1.jpg" alt="shop" />
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog">
                    Blog<i class="fas fa-angle-down"></i>
                  </Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <Link href="#">Standard Layout</Link>
                      </li>
                      <li>
                        <Link href="#">Grid Layout</Link>
                      </li>
                      <li>
                        <Link href="#">single Post Layout</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/pages">
                    Pages <i class="fas fa-angle-down"></i>
                  </Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/FAQ">FAQ</Link>
                      </li>
                      <li>
                        <Link to="#">404 Page</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li className="login-signup">
                  <Link to="/login">LOGIN</Link>
                </li>
                <li className="login-signup">
                  <Link to="/register">SIGNUP</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- menu end here --> */}
          <div className="header-item item-right">
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
            <Link to="cart">
              <i class="fas fa-shopping-cart"></i>
            </Link>
            <span className="cart-counter">48</span>

            <div className="menu-overlay"></div>
            <div className="menu">
              <div className="mobile-menu-head">
               
                
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/languages">
                    <i class="fas fa-globe"></i>
                  </Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li>
                        <Link to="/en">ENGLISH</Link>
                      </li>
                      <li>
                        <Link to="/de">DEUTSCH</Link>
                      </li>
                      <li>
                        <Link to="/fr">FRANÇAİS</Link>
                      </li>
                      <li>
                        <Link to="/es">TÜRKÇE </Link>
                      </li>
                      <li>
                        <Link to="/es">ESPAÑOL</Link>
                      </li>
                      <li>
                        <Link to="/es">ITALİANO</Link>
                      </li>
                      <li>
                        <Link to="/es">عربي </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </Header>
  );
};

export default Navbar;
