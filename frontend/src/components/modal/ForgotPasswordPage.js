
  import React from 'react'

  import {
    
      FormControl,
   
      Button,
     
    } from "./styles/Login";
  
 
  import { Link } from 'react-router-dom'
  import  { useState } from 'react'
  import axios from 'axios'
  
import{toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
  
  const ForgotForm = () => {


    const [email, setEmail] = useState("");

  
    const forgotPasswordHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "/api/auth/forgotpassword",
          { email },
          config
        );
       
        toast.success(data.data);
      } catch (error) {
        toast.error(error.response.data.error);
       
      }
    };
  
   
      return (
          <>
            <h2>Forgot Password</h2>
            <p>Enter your email address and we'll send you a link to reset your password</p>

            <form onSubmit={forgotPasswordHandler}>
            <div className="form-group">
              <FormControl     type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </div>
          
            <Button type="submit">Submit</Button>

          </form>
          </>
      )
  }
  
  export default ForgotForm
  