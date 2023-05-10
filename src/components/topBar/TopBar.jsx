import React, { useEffect, useState } from 'react';
// Import the topBar css file
import "./topBar.css"
import { NotificationsNone, Settings, Home, LockSharp} from "@material-ui/icons";

import { useNavigate } from 'react-router-dom';

export default function TopBar(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status
  const {user}=props;

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      setIsLoggedIn(true);
    } else {
      handleLogout();
    }
  },[])

  function handleLogout() {
    // Clear any authentication data, such as a token or session data
    // Update the state to reflect that the user is no longer logged in
    localStorage.removeItem('userToken');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isMaintainace');
    user(null);
    setIsLoggedIn(false);
    navigate('/login');
  }
  
  return (
    // <div>
    // Creating a topbar wraapper - with 2 parts - left and right
        <div className="topBarWrapper">
            <div>
      {localStorage.getItem('userToken') ? (
        <div>
          <h1 className="heading-main">Welcome, Admin!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h1 className="heading-main">You are not logged in.</h1>
        
      )}
    </div>
            <div className="topLeft">
            <span className="logo">Admin Dashboard</span>
            </div>

            <div className="topRight">
                <div className="topRightIconWrapper">
                    <NotificationsNone />
                    <span className="topIconBadge">6</span> 
                </div>   

                <div className="topRightIconWrapper">
                    <Settings />
                </div> 

                <div className="topRightIconWrapper">
                    <Home />
                </div> 

                <div className="topRightIconWrapper">
                    <LockSharp />
                </div> 

                <div>
                <img src="http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg" alt="" className="Image"/>
                </div>

            </div>  
        </div>
    // </div>
  );
}

