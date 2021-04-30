import React, { useContext } from 'react';
import './LogIn.css';
import { FcGoogle } from 'react-icons/fc';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn } from './AuthManager';
import Brush from '../../images/paint-brush.png';
import Header from '../Navbar/Header';



const LogIn = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    console.log(loggedInUser);

    return (
        <div>
            <Header></Header>
            <div className="login-wrap">
                <div className="login-content shadow">
                <div className="d-flex">
                       <img src={Brush} width="50px" height="20px" className="d-inline-block align-top img-fluid" alt=""/>
                       <h4 style={{color:"#555E84"}}>
                           <b>BRUSH<span style={{color:'tomato'}}>BROS</span></b>
                           <br/>
                           <span style={{color:"goldenrod"}}>S E R V I C E S</span>
                        </h4>
                    </div>
                    <button className="btn btn-success mt-3" onClick={googleSignIn}>
                        <FcGoogle style={{ fontSize: '25px' }} /> Sign in with Google
                </button>
                </div>
            </div>
        </div>
    )
}

export default LogIn;