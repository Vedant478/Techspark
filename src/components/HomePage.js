import React from "react";
import home from "../assets/TS_videos/Fixed.mp4";
import "./HomePage.css";
import "./Navbar.js"
import Navbar from "./Navbar.js";



function HomePage() {
  
    return(
      <>
        
        <div>
        <div>
          <Navbar/>
        </div>
        <div className="home-main">
          <video autoPlay loop muted playsInline>
          <source src={home} type="video/mp4" />
          Your browser is noob
          </video>
        </div>
        <div className="home-text">
          <div className="me-relative">
            <h1>Tech Spark</h1>
            <h2>2023</h2>
          </div>
        </div>
       
      </div>
      </>
    )
  };
export default HomePage;
