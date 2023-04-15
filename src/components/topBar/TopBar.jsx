import React from 'react';
// Import the topBar css file
import "./topBar.css"
import { NotificationsNone, Settings, Home, LockSharp} from "@material-ui/icons";


export default function topBar() {
  return (
    // <div>
    // Creating a topbar wraapper - with 2 parts - left and right
        <div className="topBarWrapper">
            
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

