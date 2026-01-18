import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-left">
                        <a href="mailto:contact@ashdesigns.com">📧 contact@ashdesigns.com</a>
                        <a href="tel:+919876543210">📱 +91 98765 43210</a>
                    </div>
                    <div className="top-bar-right">
                        <a href="#" style={{ color: 'var(--primary-blue)' }}>Login</a>
                        <span style={{ color: 'var(--grey-300)' }}>|</span>
                        <a href="#" style={{ color: 'var(--primary-blue)' }}>Register</a>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className={isScrolled ? 'scrolled' : ''}>
                <nav className="container">
                    <Link to="/">
                        <img src="/assets/logo.png" alt="Ash Designs Logo" className="logo" />
                    </Link>

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" className={isActive('/')}>Home</Link></li>
                        <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                        <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
                        <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link></li>
                        <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
                        <li><Link to="/contact" className="btn-quote">Get a Quote</Link></li>
                    </ul>

                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;
