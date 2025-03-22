// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import './App.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <div className="App">
      <Header openLoginModal={openLoginModal} openSignupModal={openSignupModal} />
      <Hero openSignupModal={openSignupModal} />
      <Features />
      <Projects />
      <Footer />

      {showLoginModal &&
        <LoginModal
          closeLoginModal={closeLoginModal}
          switchToSignup={switchToSignup}
        />
      }

      {showSignupModal &&
        <SignupModal
          closeSignupModal={closeSignupModal}
          switchToLogin={switchToLogin}
        />
      }
    </div>
  );
}

export default App;