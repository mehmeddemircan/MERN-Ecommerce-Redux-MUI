import React, { Fragment } from "react";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  CssBaseline,
  Button,
  Badge,
  Avatar,
  Collapse,
  CardContent,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Row, Col, ListGroup, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ProductDetail.css";
import BootstrapTooltip from "../elements/tooltip";
import { ShoppingBasket, ShoppingCart, ThumbUp } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Pagination from "../elements/pagination";
import Loader from "../components/loader";
import CommentModal from "../components/modal/CommentModal";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Review from "../components/review";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    backgroundColor: "red",
    minWidth: 400,
    height: 412.5,
  },
  ul: {
    display: "block",
    padding: 10,
    listStyle: "none",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  inputLabel: {
    fontWeight: "bold",
    color: "#222",
  },
  expand: {
    transform: "rotate(0deg)",
    padding: 14,
    height: 40,

    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProductDetailScreen = ({ match, location, history }) => {
  const classes = useStyles();

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const [showComment, setShowComment] = useState(false);

  const handleOpenComment = () => {
    console.log("Actimmmmm");
    setShowComment(true);
  };
  const handleCloseComment = () => {
    console.log("ı CLOsedddd");
    setShowComment(false);
  };

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productCreateReview;

  const auth = useSelector((state) => state.auth);

  const [expanded, setExpanded] = useState(false);



  return (
    <Fragment>
      <Layout>
        <Container maxWidth="xl" style={{ marginTop: 100 }}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button
              style={{ borderRadius: 14, marginLeft: 30, outline: "none" }}
            >
              <ArrowBackIcon />
              Go back
            </Button>
          </Link>
          {loading ? (
            <Loader />
          ) : error ? (
            toast.error(error)
          ) : (
            <div className="productscreen">
              <div className="productscreen__left">
                <div className="left__image">
                  <img
                    style={{ maxWidth: 600, maxHeight: 450 }}
                    src={product.image}
                    alt={product.name}
                  />
                  <CardActions
                    disableSpacing
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: 10,
                    }}
                  >
                    <BootstrapTooltip title="I like">
                      <IconButton
                        aria-label="Like"
                        size="small"
                        style={{ color: "#222", padding: 12, outline: "none" }}
                      >
                        <Badge badgeContent={4} size="small" color="primary">
                          <ThumbUp />
                        </Badge>
                      </IconButton>
                    </BootstrapTooltip>
                    <BootstrapTooltip title="Add to favorites">
                      <IconButton
                        aria-label="add to favorites"
                        size="small"
                        style={{
                          color: "#222",
                          padding: 12,
                          cursor: "pointer",
                          outline: "none",
                        }}
                      >
                        <Badge badgeContent={4} size="small" color="primary">
                          <FavoriteBorderOutlinedIcon />
                        </Badge>
                      </IconButton>
                    </BootstrapTooltip>

                    <BootstrapTooltip title="Share">
                      <IconButton
                        aria-label="share"
                        style={{ color: "#222", outline: "none" }}
                      >
                        <ShareIcon />
                      </IconButton>
                    </BootstrapTooltip>
                  </CardActions>
                </div>

                <div className="left__info" style={{ margin: 10 }}>
                  <h3 className="left__name" style={{ marginBottom: 10 }}>
                    {product.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <h4>
                      <Rating
                        name="half-rating"
                        value={product.rating}
                        precision={0.5}
                        size="small"
                        style={{ marginRight: 3, marginLeft: 5 }}
                        readOnly
                      />
                      ({product.numReviews}{" "}
                      {product.numReviews >= 1 ? "reviews" : "review"})
                    </h4>
                  </div>
                  <h4 style={{ marginBottom: 9 }}>Price : ${product.price}</h4>

                  <h6 style={{ lineHeight: 1.4 }}>{product.description}</h6>

                  <h5 style={{ display: "flex", justifyContent: "flex-end" }}>
                    {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                  </h5>

                  {product.countInStock > 0 && (
                    <h3 style={{ display: "flex", marginBottom: 9 }}>
                      Quantity:
                      <p>
                        <Row>
                          <Col>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </p>
                    </h3>
                  )}
                  <h4 style={{ margin: 10, padding: 20 }}>
                    <Button
                      onClick={addToCartHandler}
                      variant="contained"
                      disabled={product.countInStock === 0}
                      style={{
                        backgroundColor: "#222",
                        color: "#fff",
                        width: "100%",
                        borderRadius: 12,
                      }}
                      size="large"
                    >
                      {product.countInStock === 0
                        ? "Out of Stock"
                        : "Add To Cart"}
                    </Button>
                  </h4>
                </div>
              </div>
            </div>
          )}
        </Container>
        <Container>
          <CssBaseline />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ margin: 10, padding: 10, display: "inline-block" }}>
              {" "}
              {product.reviews.length === 0 && <h2>No reviews</h2>}
              6983 Reviews
            </h3>
            <Rating
              name="half-rating"
              value={product.rating}
              precision={0.5}
              size="medium"
              style={{
                marginRight: 3,
                marginLeft: 5,
                color: "#222",
                flex: 0.4,
              }}
              readOnly
            />
            <BootstrapTooltip title="Create Comment">
              <CommentModal />
            </BootstrapTooltip>
          </div>
       
          {product.reviews.map((review) => (
            <Review 
              key={review._id}
              review={review}
            />
          ))}

          <Pagination />
        </Container>
      </Layout>
    </Fragment>
  );
};

export default ProductDetailScreen;
