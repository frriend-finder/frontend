import React from 'react';

import '../styles/Footer.css'

var d = new Date();

const Footer = props => {
    return (
        <footer className = "bottom-footer">
            <div className = "bottom-footer-content">
                <p>Friend Finder all rights reserved {d.getFullYear()} Made by Lambda Devs!</p>
            </div>
        </footer>
    )
}

export default Footer;