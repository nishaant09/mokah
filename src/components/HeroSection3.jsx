import React from "react";
import "../App.css";
import "./HeroSection3.css";
import { Button } from "./Button";

const HeroSection3 = () => {
  return (
    <div className="section3-container">
      <div className="box-container">
        <div className="box">
          <img src="/images/Darker.png" alt="Box 1" />
          <Button className="box-button">Dry</Button>
        </div>
        <div className="box">
          <img src="/images/Dark.png" alt="Box 2" />
          <Button className="box-button">Oily</Button>
        </div>
        <div className="box">
          <img src="/images/Medium.png" alt="Box 3" />
          <Button className="box-button">Combination</Button>
        </div>
        <div className="box">
          <img src="/images/Mediumer.png" alt="Box 4" />
          <Button className="box-button">Balanced</Button>
        </div>
        <div className="box">
          <img src="/images/Light.png" alt="Box 5" />
          <Button className="box-button">Box 5</Button>
        </div>
        <div className="box">
          <img src="/images/Lighter.png" alt="Box 6" />
          <Button className="box-button">Box 6</Button>
        </div>
      </div>
      <div>
        <button className="btn btn--large">Continue</button>
      </div>
    </div>
  );
};

export default HeroSection3;
