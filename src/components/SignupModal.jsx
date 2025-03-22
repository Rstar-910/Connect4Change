// components/SignupModal.js
import React, { useState } from 'react';

function SignupModal({ closeSignupModal, switchToLogin }) {
    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState('');
    const [formData, setFormData] = useState({
        // Common fields
        userId: '',
        fullName: '',
        email: '',
        password: '',

        // Volunteer specific fields
        age: '',
        gender: '',
        phone: '',
        skills: [],
        availability: '',
        interests: '',

        // NGO specific fields
        organizationName: '',
        location: '',
        orgDescription: '',
        orgWebsite: '',
        ngoPhone: '',

        // Government agency specific fields
        agencyName: '',
        department: '',
        contactPerson: '',
        officialEmail: '',
        officePhone: '',
        agencyWebsite: '',
        jurisdiction: '',
        serviceArea: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleUserTypeSelect = (type) => {
        setUserType(type);
        setStep(2); // Move to the next step after selecting user type
    };

    const handleBackdropClick = (e) => {
        if (e.target.className === 'modal') {
            closeSignupModal();
        }
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data with the user-provided ID
        console.log('Signup form submitted', { ...formData, userType });
        closeSignupModal();
    };

    // Step 1: Select User Type
    const renderStep1 = () => (
        <>
            <div className="modal-header">
                <h2>Sign Up</h2>
                <p>Select your role to get started</p>
            </div>
            <div className="user-type-selection">
                <div
                    className="user-type-card"
                    onClick={() => handleUserTypeSelect('volunteer')}
                >
                    <div className="user-type-icon">👤</div>
                    <h3>Volunteer</h3>
                    <p>I want to contribute my time and skills to community projects</p>
                </div>
                <div
                    className="user-type-card"
                    onClick={() => handleUserTypeSelect('ngo')}
                >
                    <div className="user-type-icon">🏢</div>
                    <h3>NGO/Non-profit</h3>
                    <p>I represent an organization looking for volunteers and resources</p>
                </div>
                <div
                    className="user-type-card"
                    onClick={() => handleUserTypeSelect('government')}
                >
                    <div className="user-type-icon">🏛️</div>
                    <h3>Government Agency</h3>
                    <p>I represent a government body collaborating on community initiatives</p>
                </div>
            </div>
            <div className="modal-footer">
                <p>Already have an account? <a href="#" onClick={switchToLogin}>Log In</a></p>
            </div>
        </>
    );

    // Step 2: Basic Information Form
    const renderStep2 = () => {
        if (userType === 'volunteer') {
            return (
                <>
                    <div className="modal-header">
                        <h2>Volunteer Basic Information</h2>
                        <p>Tell us about yourself</p>
                    </div>
                    <form onSubmit={handleNextStep}>
                        <div className="form-group">
                            <label htmlFor="userId">User ID</label>
                            <input
                                type="text"
                                id="userId"
                                value={formData.userId}
                                onChange={handleInputChange}
                                placeholder="Create your user ID"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
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
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <div className="form-action">
                            <button type="button" onClick={handlePrevStep} className="secondary-btn">Back</button>
                            <button type="submit" className="primary-btn">Next</button>
                        </div>
                    </form>
                </>
            );
        } else if (userType === 'ngo') {
            return (
                <>
                    <div className="modal-header">
                        <h2>Organization Basic Information</h2>
                        <p>Tell us about your organization</p>
                    </div>
                    <form onSubmit={handleNextStep}>
                        <div className="form-group">
                            <label htmlFor="userId">Organization ID</label>
                            <input
                                type="text"
                                id="userId"
                                value={formData.userId}
                                onChange={handleInputChange}
                                placeholder="Create your organization ID"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="organizationName">Organization Name</label>
                            <input
                                type="text"
                                id="organizationName"
                                value={formData.organizationName}
                                onChange={handleInputChange}
                                placeholder="Enter organization name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter organization email"
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
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <div className="form-action">
                            <button type="button" onClick={handlePrevStep} className="secondary-btn">Back</button>
                            <button type="submit" className="primary-btn">Next</button>
                        </div>
                    </form>
                </>
            );
        } else if (userType === 'government') {
            return (
                <>
                    <div className="modal-header">
                        <h2>Government Agency Basic Information</h2>
                        <p>Tell us about your government agency</p>
                    </div>
                    <form onSubmit={handleNextStep}>
                        <div className="form-group">
                            <label htmlFor="userId">Government Agency ID</label>
                            <input
                                type="text"
                                id="userId"
                                value={formData.userId}
                                onChange={handleInputChange}
                                placeholder="Enter your government agency ID"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="agencyName">Government Agency Name</label>
                            <input
                                type="text"
                                id="agencyName"
                                value={formData.agencyName}
                                onChange={handleInputChange}
                                placeholder="Enter government agency name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <input
                                type="text"
                                id="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                placeholder="Enter department name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Official Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter official email address"
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
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <div className="form-action">
                            <button type="button" onClick={handlePrevStep} className="secondary-btn">Back</button>
                            <button type="submit" className="primary-btn">Next</button>
                        </div>
                    </form>
                </>
            );
        }
    };

    // Step 3: Role-specific Information
    const renderStep3 = () => {
        if (userType === 'volunteer') {
            return (
                <>
                    <div className="modal-header">
                        <h2>Volunteer Additional Information</h2>
                        <p>Tell us more about yourself</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                placeholder="Enter your age"
                                min="13"
                                max="120"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="non-binary">Non-binary</option>
                                <option value="prefer-not-to-say">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills">Skills</label>
                            <select
                                id="skills"
                                multiple
                                value={formData.skills}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    skills: Array.from(e.target.selectedOptions, option => option.value)
                                })}
                            >
                                <option value="teaching">Teaching</option>
                                <option value="web_development">Web Development</option>
                                <option value="graphic_design">Graphic Design</option>
                                <option value="project_management">Project Management</option>
                                <option value="writing">Writing</option>
                                <option value="gardening">Gardening</option>
                            </select>
                            <small>Hold Ctrl/Cmd to select multiple skills</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="availability">Availability</label>
                            <select
                                id="availability"
                                value={formData.availability}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select your availability</option>
                                <option value="weekends">Weekends only</option>
                                <option value="weekdays">Weekdays only</option>
                                <option value="evenings">Evenings only</option>
                                <option value="flexible">Flexible schedule</option>
                            </select>
                        </div>
                        <div className="form-action">
                            <button type="button" onClick={handlePrevStep} className="secondary-btn">Back</button>
                            <button type="submit" className="primary-btn">Create Account</button>
                        </div>
                    </form>
                </>
            );
        } else if (userType === 'ngo') {
            return (
                <>
                    <div className="modal-header">
                        <h2>Organization Additional Information</h2>
                        <p>Tell us more about your organization</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="ngoPhone">Phone Number</label>
                            <input
                                type="tel"
                                id="ngoPhone"
                                value={formData.ngoPhone}
                                onChange={handleInputChange}
                                placeholder="Enter organization phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Enter organization location"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="orgDescription">Organization Description</label>
                            <textarea
                                id="orgDescription"
                                value={formData.orgDescription}
                                onChange={handleInputChange}
                                placeholder="Briefly describe your organization's mission"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="orgWebsite">Website (optional)</label>
                            <input
                                type="url"
                                id="orgWebsite"
                                value={formData.orgWebsite}
                                onChange={handleInputChange}
                                placeholder="https://yourorganization.org"
                            />
                        </div>
                        <div className="form-action">
                            <button type="button" onClick={handlePrevStep} className="secondary-btn">Back</button>
                            <button type="submit" className="primary-btn">Create Account</button>
                        </div>
                    </form>
                </>
            );
        } else if (userType === 'government') {
            return (
                <>
                    <div className="modal-header">
                        <h2>Government Agency Additional Information</h2>
                        <p>Tell us more about your government agency</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="officePhone">Office Phone Number</label>
                            <input
                                type="tel"
                                id="officePhone"
                                value={formData.officePhone}
                                onChange={handleInputChange}
                                placeholder="Enter office phone number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="agencyWebsite">Government Agency Website</label>
                            <input
                                type="url"
                                id="agencyWebsite"
                                value={formData.agencyWebsite}
                                onChange={handleInputChange}
                                placeholder="https://agency.gov"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jurisdiction">Jurisdiction</label>
                            <select
                                id="jurisdiction"
                                value={formData.jurisdiction}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select jurisdiction level</option>
                                <option value="local">Local/Municipal</option>
                                <option value="county">County</option>
                                <option value="state">State/Provincial</option>
                                <option value="federal">Federal</option>
                                <option value="international">International</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="serviceArea">Service Area</label>
                            <textarea
                                id="serviceArea"
                                value={formData.serviceArea}
                                onChange={handleInputChange}
                                placeholder="Describe the geographic areas your government agency serves"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div className="form-action">
                            <button type="button" onClick={handlePrevStep} className="secondary-btn">Back</button>
                            <button type="submit" className="primary-btn">Create Account</button>
                        </div>
                    </form>
                </>
            );
        }
    };

    // Render the appropriate step based on current state
    const renderCurrentStep = () => {
        switch (step) {
            case 1: return renderStep1();
            case 2: return renderStep2();
            case 3: return renderStep3();
            default: return renderStep1();
        }
    };

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
                <span className="close-modal" onClick={closeSignupModal}>&times;</span>
                {renderCurrentStep()}
            </div>
        </div>
    );
}

export default SignupModal;