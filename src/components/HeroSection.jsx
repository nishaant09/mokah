import React from 'react';

import { Button } from './Button';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

function HeroSection() {



 const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/skintype'); // Navigate to the Skin Type page
  };

  return (
    <div className='hero-container' style={{ backgroundImage: 'url("/Images/Home.png")' }}>
      <h1>Mokah Skincare Quiz</h1>
      <p>Find your routine now!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
      onClick={handleGetStartedClick}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}


export default HeroSection;
