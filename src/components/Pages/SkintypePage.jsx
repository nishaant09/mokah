import React, { useState } from 'react';
import HeroSection2 from '../HeroSection2';
import Footer from '../Footer';
import '../../App.css';

const SkintypePage = () => {
  const [selectedBox, setSelectedBox] = useState(''); // Add state to track the selected box

  // Handler for box selection
  const handleBoxSelection = (boxName) => {
    setSelectedBox(boxName);
  };

  return (
    <div className='skintype-container'>
      <HeroSection2 selectedBox={selectedBox} onBoxClick={handleBoxSelection} />
      <Footer />
    </div>
  );
}

export default SkintypePage;

