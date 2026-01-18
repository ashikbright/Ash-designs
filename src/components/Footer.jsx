import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-about">
                        <img src="/assets/logo.png" alt="Ash Designs Logo" className="footer-logo" />
                        <p>Building simple, powerful digital products for growing businesses. Your trusted partner for mobile apps, web platforms, and cloud solutions.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Mobile Apps</Link></li>
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">Cloud Solutions</Link></li>
                            <li><Link to="/services">Consulting</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:ashdesigns@zohoamil.in">ashdesigns@zohoamil.in</a></li>
                            <li><a href="tel:+919148097564">+91 91480 97564</a></li>
                            <li>Remote · India 🇮🇳</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ash Designs. All rights reserved. | Crafted with passion by Mohammad Ashik</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
