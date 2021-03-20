import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    padding: "9px 10px",
    height: 40,

    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Review = ({ review }) => {
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    console.log("ı am here");
    setExpanded(!expanded);
  };

  return (
    <div style={{marginBottom: 15}}>
      <div style={{ display: "flex", maxWidth: 890, alignItems: "center" ,}}>
        <Avatar
          alt="Cindy Baker"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <a style={{ marginLeft: 8, padding: 7 }}>{review.name}</a>
        <a>{review.createdAt.substring(0,10)}</a>
      </div>
      <Rating
        name="half-rating"
        value={review.rating}
        precision={0.5}
        size="small"
        style={{ marginLeft: 5, color: "#222", padding: 7 , }}
        readOnly
      />
     <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', height: 0}}>
     <IconButton
        
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
    
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
     </div>
      <div style={{ maxWidth: 890 }}>
        <div>
            
          <h5 >
            {review.comment.substring(0, 265)}
            {review.comment.length > 100 && expanded ? (
              <> ...</>
            ) :
            <> {review.comment.substring(300, 2000)}</> }
          </h5>

       
        
        
       
        </div>
        
      </div>
    </div>
  );
};

export default Review;
