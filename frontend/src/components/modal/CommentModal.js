import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {TextareaAutosize} from '@material-ui/core/'
import SendIcon from '@material-ui/icons/Send';
import Rating from '@material-ui/lab/Rating';
import  { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {PRODUCT_CREATE_REVIEW_RESET} from '../../constants/productConstants'
import {createProductReview, listProductDetails} from '../../actions/productActions'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure()


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CommentModal({match}) {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const dispatch = useDispatch()

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const {
    success: successProductReview,
    loading ,
    error,
  } = productCreateReview;

  const auth = useSelector((state) => state.auth);
  const {user, token} = auth


  useEffect(() => {
    console.log("ahsadhada");
    if (successProductReview) {
      toast.success('Succesfully added review')
    
    }
    if (!loading) {
      setRating(0)
      setComment('')
      handleClose()
    }
      

  },[dispatch,successProductReview,loading, match])

  const productDetails = useSelector(state => state.productDetails)

  const {product} = productDetails


  const submitHandler =(e)=> {



    e.preventDefault();
    dispatch(createProductReview(product._id,{
      rating,
      comment
    }))


  }

  return (


      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} >
    Create comment
      </Button>
    
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
    
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Your Comment - Rating
      </DialogTitle>
      <Rating name="half-rating" defaultValue={0} precision={0.5}  style={{ display:'flex', alignItems: "center", margin: 10 }}
      
        value={rating}
        onChange={(e)=>setRating(e.target.value) }
        required
      />
      

      <DialogContent dividers>
          
      <TextareaAutosize aria-label="minimum height" rowsMin={1} placeholder="Type your comment ..."  style={{width: 450, minHeight: 150, border: 'none'}}

        value={comment}
        onChange={(e)=> setComment(e.target.value)}
      required
      />
      </DialogContent>
      <DialogActions>
      
        <Button autoFocus type="submit"  color="primary" variant="outlined"   onClick={submitHandler}  style={{ borderRadius: 15}} disabled={token === null} >
          Send
          <SendIcon   style={{margin: 3}}/>
        </Button>
     
      </DialogActions>
    </Dialog>
  </div>

  
   
  );
}