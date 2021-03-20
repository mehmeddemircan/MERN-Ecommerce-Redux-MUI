import React, { Fragment } from 'react'
import {Avatar,Container, CssBaseline , InputLabel} from '@material-ui/core'
import Layout from '../components/layout'
import {getUserDetails,isUserLoggedIn} from '../actions/userActions'
import { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProfileScreen = ({match, location, history}) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')



    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
   
    const {user} = auth   

    useEffect(() => {
        if (!auth.token) {
            history.push('/')
        
       
        }else {
            setName(user.name)
            setEmail(user.email)
        }
      }, [auth.token, dispatch, user]);

    return (
 
            <Layout>
                <CssBaseline />
            <Container maxWidth="md" style={{marginTop: 20}}>
                <h4 style={{margin :'20px 0'}}>Your Profile</h4>
                    <Avatar
                        alt="profile picture"
                        className=""
                        component="div"
                        sizes=""
                        src=""
                        
                    >
                    </Avatar>
                    <div style={{margin: '20px 0px', display: 'flex',flexDirection: 'column'}}>
                        <h5>Username: {user.name}  </h5>
                        <h5>Email : {user.email} </h5>
                            
                        <h5>Username  : Eren </h5>
                        <h5>Username  : Eren </h5>
                        
                    </div>
                    
            </Container>
            </Layout>

    )
}

export default ProfileScreen
