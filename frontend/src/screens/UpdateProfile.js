import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Layout from "../components/layout";
import { Button, Container, CssBaseline, Paper } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { updateUserProfile } from "../actions/userActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "noWrap",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
  container: {
    padding: 20,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "34ch",
  },
  input: {
    display: "none",
  },
  avatarLarge: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default function UpdateProfileScreen({ history }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const {user} = auth



  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!auth.token) {
      history.push("/");
    }
    else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [auth.token, dispatch, user]);

  const submitHandler = (e) => {
  
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      toast.error("Passwords do not match !");
    } else {
      // Dispatch update profile
      dispatch(updateUserProfile({name, email, password }));
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <Layout>
      <CssBaseline />

      <Container maxWidth="lg" className={classes.container}>

      <Link to="/products" style={{ textDecoration: "none" }}>
            <Button
              style={{ borderRadius: 14, marginLeft: 30, outline: "none" }}
            >
              <ArrowBackIcon />
              Go back
            </Button>
          </Link>
        <div className={classes.root}>
          <div
            style={{ display: "flex", justifyContent: "flex-start", flex: 0.5 }}
          >
            <div
              style={{
                padding: 20,
                width: 300,
                margin: 3,
                borderRadius: 20,
                marginRight: 30,
                marginTop: 20,
              }}
            >
              <h6 style={{ border: "1px solid #3498db" }}>
                Purchases & Reviews
              </h6>
              <h6 style={{ border: "1px solid #3498db" }}>Public Profile</h6>
              <h6 style={{ border: "1px solid #3498db" }}>Settings</h6>
              <h6 style={{ border: "1px solid #3498db" }}>Apps</h6>
              <h6 style={{ border: "1px solid #3498db" }}>Prototypes</h6>
              <h6 style={{ border: "1px solid #3498db" }}> Sign Out</h6>
            </div>
          </div>

          <div className={classes.form}>
            <h2>Update Your Profile</h2>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-text">
                Fullname
              </InputLabel>
              <Input
                id="standard-search"
                variant="outlined"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-text">Email</InputLabel>
              <Input
                id="standard-search"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />

            <Input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 10px",
              }}
            >
              <Avatar
                alt="profile picture"
                className={classes.avatarLarge}
                component="div"
                sizes=""
                src=""
              ></Avatar>

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{ padding: 20, marginLeft: 20 }}
              >
                <PhotoCamera />
              </IconButton>
            </div>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#222",
                color: "#fff",
                width: "100%",
                borderRadius: 12,
                marginTop: 20,
              }}
              size="large"
              type="submit"
              onClick={submitHandler}
            >
              Update Profile
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
