import React from "react";
import home from "../assets/TS_images/BG.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div>
        <div className="home-main">
          <img src={home}></img>
        </div>
        <div className="home-text">
          <div className="me-relative">
            <h1>Tech Spark</h1>
            <h2>2023</h2>
          </div>
        </div>
        <div className="coming-soon">
          <h2>Coming soon</h2>
        </div>
      </div>
    </>
  );
}

export default HomePage;
