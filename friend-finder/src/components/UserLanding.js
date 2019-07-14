import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import '../styles/LandingPage.css';

class UserLanding extends Component {

     
    render() {
        return (
            <>
      

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