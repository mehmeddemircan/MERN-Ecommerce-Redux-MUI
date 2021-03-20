import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";

import FavoriteIcon from "@material-ui/icons/Favorite";

import { Grid, Tooltip } from "@material-ui/core";

import BootstrapTooltip from "../../elements/tooltip";

import Search from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  gridItem: {
    marginTop: 30,

    maxWidth: 280,
    maxHeight: 360,
  },

  root: {
    maxWidth: 270,
    height: 300,
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  media: {
    paddingTop: "20%", // 16:9
    height: 180,
    // Transition
    transition: "0.8s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  cartcontent: {
    padding: 10,
    marginBottom: 5,
  },
  iconOnAvator: {
    position: "absolute",
    zIndex: 999,
  },
  icon: {
    width: 255,

    justifyContent: "flex-end",
    display: "flex",
    transition: ".5s ease",
    opacity: 1,
  },
}));

export default function CardComponent({ product }) {
  // and we can reach like that
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item className={classes.gridItem}>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card className={classes.root}>
            <div>
              <div className={classes.icon}>
                <BootstrapTooltip
                  title="Add to favorites"
                  className={classes.iconOnAvator}
                >
                  <IconButton aria-label="add to favorites" size="small">
                    <FavoriteIcon />
                  </IconButton>
                </BootstrapTooltip>
              </div>

              <CardMedia
                className={classes.media}
                image={product.image}
                alt={product.name}
              />
            </div>
            <CardContent variant="p" className={classes.cartcontent}>
              <h4 style={{ margin: 0, fontSize: 17, fontWeight: 500 }}>
                {product.name}
              </h4>
              <p style={{ margin: 0 }}></p>
              <Rating
                name="half-rating"
                defaultValue={product.rating}
                precision={0.5}
                size="small"
                style={{ marginRight: 3 }}
                readOnly
              />{" "}
              ({product.numReviews})
              <h4 style={{ margin: 0, display: "flex", alignItems: "center" }}>
                ₺{product.price}
                <h5
                  style={{
                    margin: 0,
                    display: "inline-block",
                    marginLeft: 10,
                    color: "#2E8539",
                    fontSize: 15,
                    fontWeight: "normal",
                    marginRight: 2,
                  }}
                >
                  {" "}
                  <del>₺3000</del> (20% off)
                </h5>{" "}
              </h4>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Fragment>
  );
}
