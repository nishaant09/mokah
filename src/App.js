import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Footer from './components/Footer';
import SkintypePage from './components/Pages/SkintypePage';
import SkintonePage from './components/Pages/SkintonePage'; // Import SkintonePage

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/skintype' element={<SkintypePage />} />
        <Route path='/skintone' element={<SkintonePage />} /> {/* Add SkintonePage route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
