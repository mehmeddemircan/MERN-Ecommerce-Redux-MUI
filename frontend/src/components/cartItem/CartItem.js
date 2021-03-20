import "./CartItem.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { Row, Col, ListGroup, Form } from "react-bootstrap";
const CartItem = ({ product, qtyChangeHandler, removeHandler }) => {
  
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={product.image} alt={product.name} />
      </div>
      <Link to={`/product/${product.product}`} className="cartItem__name">
        <p>{product.name}</p>
      </Link>

      <p className="cartitem__price">${product.price}</p>
      <div className="cartitem_actions">
        <Row>
          <Col>
            <Form.Control
             
              as="select"
              value={product.qty}
              onChange={(e) => qtyChangeHandler(product.product,e.target.value)}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Button
        style={{marginLeft: 10}}
          className="cartItem__deleteBtn"
          onClick={() => removeHandler(product.product)}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
