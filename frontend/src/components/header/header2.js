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
import SearchBox from "../searchbox";


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

export default function Header({history}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);


  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // Modal operations
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  useEffect(() => {
    if (auth.authenticate) {
      setShowModal(false);
    }
  }, [auth.authenticate]);

  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  const logoutHandler = () => {
    dispatch(logout());
    handleMobileMenuClose();
    setAnchorEl(null);
    toast.success("Successfully logged out !");
  };

  const renderLoggedInMenu = () => {
    return (
      <>
        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          style={{ outline: "none", padding: 15 }}
        >
          <BootstrapTooltip title="Wish List">
            <Badge badgeContent={11} color="secondary">
              <FavoriteBorderIcon />
            </Badge>
          </BootstrapTooltip>
        </IconButton>

        <IconButton
          aria-label="show 11 new notifications"
          color="inherit"
          style={{ outline: "none", padding: 15 }}
        >
          <BootstrapTooltip title="Notifications">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </BootstrapTooltip>
        </IconButton>

        <IconButton
          style={{ outline: "none", padding: 15 }}
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <BootstrapTooltip title="Your Account">
            <AccountCircle />
          </BootstrapTooltip>
        </IconButton>
      </>
    );
  };
  // Menu crud
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className={classes.Menu}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile/me" style={{ textDecoration: "none", color: "#222" }}>
        <MenuItem
          onClick={handleMenuClose}
          className={classes.MenuItem}
          style={{ height: 55 }}
   
        >
          <Avatar
            alt="Cindy Baker"
            className={classes.avatarSmall}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: 15 }}>
              {auth.user.name.charAt(0).toUpperCase() + auth.user.name.slice(1)}
            </p>
            <p style={{ fontSize: 13 }}>view your profile</p>
          </div>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose} className={classes.MenuItem}>
        <ChatIcon className={classes.MenuItemIcon} />
        Messages
      </MenuItem>
    <Link to="/profile/update" style={{color:'#222', textDecoration: "none"}}>
    <MenuItem onClick={handleMenuClose} className={classes.MenuItem}>
        <SettingsIcon className={classes.MenuItemIcon} />
        Account Settings
      </MenuItem>
    </Link>
      <MenuItem onClick={handleMenuClose} className={classes.MenuItem}>
        <StorefrontIcon className={classes.MenuItemIcon} />
        Sell on Verslar
      </MenuItem>
      <MenuItem
        onClick={logoutHandler}
        className={classes.MenuItem}
        style={{ marginTop: 15 }}
      >
        <ExitToAppIcon className={classes.MenuItemIcon} />
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Drawer />

          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            {" "}
            <Typography className={classes.title} variant="h6" noWrap>
              Verslar
            </Typography>
          </Link>
{/* Search box */}
      <Route render={({history})=> <SearchBox history={history} />} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

         <Link to="/products" style={{color: '#fff',textDecoration: "none" }}>
         <Button
              
              color="inherit"
              style={{ borderRadius: "50%", outline: "none" , padding: 15, margin: 3 }}
            >
            Products
            </Button>
         </Link>
            {auth.authenticate ? (
              renderLoggedInMenu()
            ) : (
              <Button
                onClick={handleOpen}
                color="inherit"
                style={{ borderRadius: "50%", outline: "none" }}
              >
                Sign in
              </Button>
            )}


            <ModalForm
              visible={showModal}
              showModal={showModal}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              handleClose={handleClose}
             />
            <BootstrapTooltip title="Shopping cart">
              <Link
                to="/cart"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <IconButton
                  aria-label="show 4 new mails"
                  color="inherit"
                  style={{ outline: "none", padding: 15, margin: 3 }}
                >
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </BootstrapTooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
