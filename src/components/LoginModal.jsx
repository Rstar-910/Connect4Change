// components/LoginModal.js
import React, { useState } from 'react';

function LoginModal({ closeLoginModal, switchToSignup }) {
    const [userType, setUserType] = useState('volunteer'); // Default to volunteer
    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Login form submission logic would go here
        console.log('Login form submitted for', userType, formData);
        closeLoginModal();
    };

    const handleBackdropClick = (e) => {
        if (e.target.className === 'modal') {
            closeLoginModal();
        }
    };

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
                <span className="close-modal" onClick={closeLoginModal}>&times;</span>
                <div className="modal-header">
                    <h2>Log In</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userType">I am a:</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={handleUserTypeChange}
                            className="user-type-selector"
                        >
                            <option value="volunteer">Volunteer</option>
                            <option value="ngo">NGO/Non-profit</option>
                            <option value="government">Government Agency</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="userId">User ID</label>
                        <input
                            type="text"
                            id="userId"
                            value={formData.userId}
                            onChange={handleInputChange}
                            placeholder="Enter your user ID"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-action">
                        <button type="submit" className="primary-btn">Log In</button>
                    </div>
                </form>
                <div className="modal-footer">
                    <p>Don't have an account? <a href="#" onClick={switchToSignup}>Sign Up</a></p>
                    <p><a href="/forgot-password">Forgot password?</a></p>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;