import React from "react";
import "../App.css";
import "./HeroSection2.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const HeroSection2 = ({ selectedBox, onBoxClick }) => {
  const isBoxSelected = (boxName) => selectedBox === boxName;

  return (
    <div className="hero-container section2-hero-container">
      <h1>Please select your skin type</h1>
      <p className="section2-hero-subheading">
        This would help us get the best results
      </p>
      <div className="box-container">
        <div
          className={`box ${isBoxSelected("Dry") ? "selected" : ""}`}
          onClick={() => onBoxClick("Dry")}
        >
          <img src="/images/Dry.png" alt="Box 1" />
          <Button className="box-button">Dry</Button>
        </div>
        <div
          className={`box ${isBoxSelected("Oily") ? "selected" : ""}`}
          onClick={() => onBoxClick("Oily")}
        >
          <img src="/images/Oily.png" alt="Box 2" />
          <Button className="box-button">Oily</Button>
        </div>
        <div
          className={`box ${isBoxSelected("Combination") ? "selected" : ""}`}
          onClick={() => onBoxClick("Combination")}
        >
          <img src="/images/Combination.png" alt="Box 3" />
          <Button className="box-button">Combination</Button>
        </div>
        <div
          className={`box ${isBoxSelected("Balanced") ? "selected" : ""}`}
          onClick={() => onBoxClick("Balanced")}
        >
          <img src="/images/Normal.png" alt="Box 4" />
          <Button className="box-button">Balanced</Button>
        </div>
      </div>
      <Link to="/skintone">
        <button className="btn btn--large" disabled={!selectedBox}>
          Continue
        </button>
      </Link>
    </div>
  );
};

export default HeroSection2;
