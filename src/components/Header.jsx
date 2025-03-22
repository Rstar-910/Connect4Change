import React from 'react';

function Header({ openLoginModal, openSignupModal }) {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <a href="/" className="logo"><span className="logo-icon">⟳</span> Connect4Change</a>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/organizations">Organizations</a></li>
                            <li><a href="/how-it-works">How It Works</a></li>
                            <li><a href="/about">About Us</a></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <button className="login-btn" onClick={openLoginModal}>Log In</button>
                        <button className="signup-btn" onClick={openSignupModal}>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;