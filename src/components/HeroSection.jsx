import React from "react";

import { Button } from "./Button";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/skintype"); // Navigate to the Skin Type page
  };

  return (
    <div
      className="hero-container main-hero-container"
      style={{
        backgroundImage: 'url("/Images/Home.png")',
        backgroundSize: "cover",
      }}
    >
      <h1 className="main-hero-heading">Mokah Skincare Quiz</h1>
      <p className="main-hero-subheading">Find your routine now!</p>
      <div className="main-hero-btns btn-top-margin">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={handleGetStartedClick}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
