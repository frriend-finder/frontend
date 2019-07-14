import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

class UserLanding extends Component {

        state = {
            isLoggedIn: false
        }


    render() {
        return (
            <>
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
                            <li><Link to="/login">Login</Link></li> 
                            }
                            
                        </ul>
            </div>

                <div className="landing-wrapper">


                    <div className="hero-img"></div>
                       <div className="landing-wrapper-content">
                        <h1>Friends Helping Find Friends</h1>
                        <h2>Join our community today and find new friends!</h2>
                        <h3>come on friend we're ready to meet you.</h3>
                        <Link to="/signup"><Button variant="primary" size="lg">Sign Up!</Button></Link>
                       </div>
                    
                    
                </div>
</>
        )
    }
}

export default UserLanding;