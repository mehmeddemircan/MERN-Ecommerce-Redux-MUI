import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Box,
  ImageArea,
  Image,
  LoginPopup,
  LoginForm,
  FormControl,
  Label,
  Button,
  Close,
  LinkOps,
  SocialMedia,
  SocialMediaList,
  Span,
} from "./styles/Login";
import { useState, useRef, useCallback, useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { login } from "../../actions/userActions";
import {register as _register} from "../../actions/userActions"

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ModalForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register, setRegister] = useState(false);
const [error, setError] = useState("")
  const dispatch = useDispatch();

   const auth = useSelector(state => state.auth)
   const {user} = auth
  const userRegister = () => {
    const user = { name, email, password };
    if (name === "" || email === "" || password === "") {
      toast.error('Please provide all Field')
    }

  
    dispatch(_register(user))
  };

  const userLogin = (e) => {
    e.preventDefault()
    
    if (register) {
     
      userRegister()
    }else {
      dispatch(login({email,password}));
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 length')
      setPassword("")
    }

   
  };

 

  if (!props.visible) {
    return null;
  }

  return (
    <>
      <LoginPopup>
        <Box>
          <ImageArea>
            <Image></Image>
            <h1 >Verslar</h1>
           
          </ImageArea>
          <LoginForm>
            <Close onClick={props.handleClose}>&times;</Close>
           
            <h3 onClick={()=> { setRegister(false);setEmail(''); setPassword('')  }}>Log In</h3>

            <h3 onClick={()=> {setRegister(true); setName(''); setEmail(''); setPassword('') }} >Register</h3>
            
            <h2 style={{ color: "#222" }}>{register ? 'Register' :  'Login'}</h2>
            <form onSubmit={userLogin}>
              {register && (
                <div className="form-group">
                  <FormControl
                    placeholder="Full Name"
                    required
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="form-group">
                <FormControl
                  placeholder="Email"
                  required
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <FormControl
                  placeholder="Password"
                  required
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group" style={{margin:'15px 0'}}>
                <Label for="remember-me">
                  <input type="checkbox" name="remember-me" defaultChecked />
                  Remember Me
                </Label>
                {register ? (
                  <Link style={{color:'#222'}} onClick={()=>{setRegister(false); setEmail('');setPassword('');}}><LinkOps >Already have account?</LinkOps></Link>
                ) : <Link to="password/forgot" style={{color: '#222'}}><LinkOps>Forgot password ?</LinkOps></Link>}
          
              </div>
              <Span style={{ color: "#222" , margin: '10px 0px'}} >or continue with</Span>
              <SocialMediaList>
                <SocialMedia className="social-media" >
                  <i class="fab fa-facebook"></i>
                </SocialMedia>
                <SocialMedia className="social-media">
                  <i class="fab fa-google"></i>
                </SocialMedia>
                <SocialMedia className="social-media">
                  <i class="fab fa-apple"></i>
                </SocialMedia>
              </SocialMediaList>
              <Button type="submit" onClick={userLogin}>
                {register ? 'Register' : 'Login'}
              </Button>
            </form>
          </LoginForm>
        </Box>
      </LoginPopup>
    </>
  );
};

export default ModalForm;
          