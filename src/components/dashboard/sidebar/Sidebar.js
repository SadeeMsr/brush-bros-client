import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import user from '../../../images/user.png'
import { Link } from 'react-router-dom';
import { FaGripHorizontal, FaHome, FaCartPlus, FaListAlt, FaCommentDots, FaUserPlus, FaPlus, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { UserContext } from '../../../App';
import { handleSignOut } from '../../login/AuthManager';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);
            })
    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 px-4 pb-5" style={{ height: "100%" }}>
            <div className='ms-5 mt-2 mb-4'>
                <img src={user} className="image mb-1" alt="user" />
                <h4 className="text-white">Md sadee</h4>
            </div>
            <ul className="list-unstyled ms-5">
                <li className="mt-1">
                    <Link to="/" className="text-white text-decoration-none">
                        <FaHome /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FaGripHorizontal /> <span>Dashboard</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/booking" className="text-white text-decoration-none">
                            <FaCartPlus /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/booking" className="text-white text-decoration-none">
                            <FaListAlt /> <span>Booking list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white text-decoration-none">
                            <FaCommentDots /> <span>review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addServices" className="text-white text-decoration-none" >
                            <FaPlus /> <span>Add services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white text-decoration-none" >
                            <FaUserPlus /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white text-decoration-none" >
                            <FaCog /> <span>Manage services</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none" onClick={signOut}><FaSignOutAlt /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;