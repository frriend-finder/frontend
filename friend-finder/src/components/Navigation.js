import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

class Navigation extends React.Component{

    state = {
        isLoggedIn: false
    }

render(){
    return(

    <div className="navigation-wrapper"> 
        <div className="logo-wrapper">
            <h1>Friends Finder</h1>  
             <img className="logo" src="https://www.pngkey.com/png/full/59-592141_friend-silhouette-at-getdrawings-friend-png.png" alt="friend-logo" />
        </div>

        <ul className="link-wrapper">
           <li><Link to="/">Home</Link></li> |
           {
               this.state.isLoggedIn? 
            <li><Link to="/">LogOut</Link></li>:
            <li><Link exact to="/login">Login</Link></li> 
            }
            
        </ul>
     </div>
    )
   }

}

export default Navigation;