// components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Connect4Change</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/mission">Our Mission</a></li>
                            <li><a href="/stories">Impact Stories</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>For Volunteers</h3>
                        <ul>
                            <li><a href="/projects">Find Projects</a></li>
                            <li><a href="/hours">Track Hours</a></li>
                            <li><a href="/skills">Skills Development</a></li>
                            <li><a href="/resources/volunteers">Volunteer Resources</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>For Organizations</h3>
                        <ul>
                            <li><a href="/post-project">Post Projects</a></li>
                            <li><a href="/find-volunteers">Find Volunteers</a></li>
                            <li><a href="/success-stories">Success Stories</a></li>
                            <li><a href="/resources/organizations">Organization Resources</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/guides">Guides & Tutorials</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/terms">Terms & Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Connect4Change. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;