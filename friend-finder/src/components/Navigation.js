import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

class Navigation extends React.Component{

    state = {
        isLoggedIn: true  //need to make a change here and a conditional in the className to toggle the class name depending if this is true or not
    }

    render() {
        return(

        <div className="navigation-wrapper"> 
            <div className="logo-wrapper">
                <h1>Friends Finder</h1>  
                    <img className="logo" src="https://www.pngkey.com/png/full/59-592141_friend-silhouette-at-getdrawings-friend-png.png" alt="friend-logo" />
            </div>

            <ul className="link-wrapper">

                {
                    this.state.isLoggedIn? 
                    <><li><Link to="/">Home</Link></li> | <li><Link to="/">Log Out</Link></li> | <li><Link to="/memberslist">Find Friends</Link></li> </> :
                    <><li><Link to="/">Home</Link></li> | <li><Link to="/login">Login</Link></li> </>
                }
                
            </ul>
        </div>
        )
    }

}

export default Navigation;