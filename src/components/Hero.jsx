// components/Hero.js
import React from 'react';

function Hero({ openSignupModal }) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Collaborate for Community Change</h1>
                    <p>Connect volunteers, NGOs, and government bodies to solve local issues together. Join our platform to make a real difference in your community.</p>
                    <div className="hero-buttons">
                        <button className="primary-btn" onClick={openSignupModal}>Get Started</button>
                        <button className="secondary-btn">Explore Projects</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;