// components/Features.js
import React from 'react';

function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="section-header">
                    <h2>How It Works</h2>
                    <p>Our platform makes it easy to connect, collaborate and create impact</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">👥</div>
                        <h3>Connect</h3>
                        <p>Find like-minded individuals, NGOs, and government bodies working on issues you care about.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🤝</div>
                        <h3>Collaborate</h3>
                        <p>Work together on projects, share resources, and combine expertise to maximize impact.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌟</div>
                        <h3>Create Impact</h3>
                        <p>Track progress, measure outcomes, and celebrate the positive changes you bring to communities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;