import React,{ useContext } from 'react';
import './Header.css'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { handleSignOut } from '../login/AuthManager';
import { Navbar, Nav } from 'react-bootstrap';
import Brush from '../../images/paint-brush.png';


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const name = loggedInUser.name;

    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);
            })
    }


    return (
        <div style={{backgroundColor:"#082d47"}}>

            <Navbar className="container" collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <div className="d-flex">
                       <img src={Brush} width="50px" height="20px" className="d-inline-block align-top img-fluid" alt=""/>
                       <h4 style={{color:"#555E84"}}>
                           <b>BRUSH<span style={{color:'#F0F6FF'}}>BROS</span></b>
                           <br/>
                           <span style={{color:"#F9E487"}}>S E R V I C E S</span>
                        </h4>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home" className="text-light nav-content"><b>Home</b></Nav.Link>
                        <Nav.Link href="/" className="text-light nav-content"><b>Projects</b></Nav.Link>
                        <Nav.Link href="/booking" className="text-light nav-content"><b>Bookings</b></Nav.Link>
                        <Nav.Link href="/dashboard" className="text-light nav-content"><b>Dashboard</b></Nav.Link>
                        <Nav.Link href="/" className="text-light mt-1"><h6><b>{name}</b></h6></Nav.Link>
                    </Nav>
                    {loggedInUser.success ?
                        <button  className="btn btn-outline-success" type="submit" onClick={signOut}> Log Out </button> :
                        <Link to="/login"> <button className="btn btn-outline-warning" type="submit"> Log in </button> </Link>
                    }
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
};

export default Header;