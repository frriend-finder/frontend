import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserLanding extends Component {
    render() {
        return (
            
                <div className="landing-wrapper">
                    <div className="navigation-wrapper"> 
                        <h1>Friends Finder</h1>  // this needs to be a component for navigation in the app
                        <img className="logo" src="" />
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/login"><li>Login</li></Link>
                        </ul>
                    </div>

                    <div className="hero-img">
                        <h1>Friends Helping Find Friends</h1>
                        <h2>Join our community today and find new friends!</h2>
                        <p>come on friend were ready to meet you.</p>
                        <Link to="/signup"><button>Sign Up!</button></Link>
                    </div>
                    
                </div>

        )
    }
}
//

export default UserLanding;