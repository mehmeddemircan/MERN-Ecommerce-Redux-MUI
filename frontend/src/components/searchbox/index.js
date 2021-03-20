import React, { Fragment } from "react";
import { Route } from 'react-router-dom'

import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Button,
  Menu,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import { useState, useEffect } from "react";
import BootstrapTooltip from "../../elements/tooltip";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import ModalForm from "../modal/Login";
import Drawer from "../drawer/index";
import { auth, logout, isUserLoggedIn } from "../../actions/userActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {},
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      fontSize: 24,
      // So itis my code
      marginRight: 50,
    },
    searchDiv: {},
    search: {
      position: "relative",
  
      borderRadius: 12,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "62ch",
        "&:focus": {
          width: "62ch",
        },
      },
   
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    Menu: {
      marginTop: 30,
    },
    MenuItem: {
      fontSize: 14,
      width: "30ch",
    },
    MenuItemIcon: {
      paddingRight: 4,
    },
    avatarSmall: {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
    },
  }));
  

const SearchBox = ({history}) => {
    const classes = useStyles()

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
     
    }

    const handleKeypress =(e)  => {
        //it triggers by pressing the enter key
      if (e.key === 'Enter') {
        e.preventDefault(); 
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
    
        }else {
          history.push('/products')
        }
      }
    };

    return (
        <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
     
        <div className={classes.search}
          
        >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Type to search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
              onKeyPress={handleKeypress}
            //   onClick={submitHandler}
            onChange = {(e)=> setKeyword(e.target.value)}
             inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
    )
}

export default SearchBox
