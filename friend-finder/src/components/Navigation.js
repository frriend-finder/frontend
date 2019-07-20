import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import { connect } from 'react-redux';
import { logout } from '../actions';

class Navigation extends React.Component{

    handleLogOut = () => {
        localStorage.clear()
        this.props.logout()
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
                    this.props.isLoggedIn? 
                    <><li><Link to="/">Home</Link></li> | <li><Link to="/" onClick={this.handleLogOut}>Log Out</Link></li> | <li><Link to="/memberslist">Find Friends</Link></li> </> :
                    <><li><Link to="/">Home</Link></li> | <li><Link to="/login">Login</Link></li> </>
                }
                
            </ul>
        </div>
        )
    }

}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
})

export default connect(
    mapStateToProps,
    { logout }
)(Navigation);