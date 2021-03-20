import React, {Fragment} from 'react'
import {Column, Container} from './styles/sidebar'


const SideBar = () => {
    return (
        <Fragment>
            <Container>
            <Column>
            <div >
        <div className="block-title">
          <h3>Category</h3>
        </div>
        <hr />
        <ul className="block-content">
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Shoes</span>
              <small>(10)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Bags</span>
              <small>(7)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span> Accessories</span>
              <small>(3)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Clothings</span>
              <small>(3)</small>
            </label>
          </li>
      
        </ul>
      </div>
    
      <div>
        <div className="block-title">
          <h3>Brands</h3>
        </div>

        <hr />
    
        <ul className="block-content">
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Gucci</span>
              <small>(10)</small>
            </label>
          </li>
          
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Burberry</span>
              <small>(7)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span> Accessories</span>
              <small>(3)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Valentino</span>
              <small>(3)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Dolce & Gabbana</span>
              <small>(3)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Hogan</span>
              <small>(3)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Moreschi</span>
              <small>(3)</small>
            </label>
          </li>
    
          <li>
            <input type="checkbox" name="" id="" />
            <label for="">
              <span>Givenchy</span>
              <small>(3)</small>
            </label>
          </li>
        </ul>
      </div>
      </Column>
      </Container>
    
     
        </Fragment>
    )
}

export default SideBar

