import React from "react";
import "./About.css";
import ironman from "../assets/profile.webp"; // place your image as image.jpg in the same folder

const AboutMe = () => (
  <div className="aboutme-container">
    <div className="aboutme-image-card">
      <img src={ironman} alt="Profile" className="aboutme-image" />
    </div>
    <div className="aboutme-content">
      <h1 className="aboutme-title">
        About <span>Me</span>
      </h1>
      <p>
        I'm Vijay Shriram BS, a passionate and detail-oriented web developer with hands-on experience
        in creating dynamic and responsive websites using modern frontend and backend technologies.
        I specialize in React.js, Node.js, and database systems like MySQL and MongoDB.
      </p>
      <p>
        I have developed several real-world projects including an e-commerce website, a job portal, and
        a blockchain-based academic credit platform. My focus is always on writing clean, maintainable
        code and building user-friendly interfaces.
      </p>
      <p>
        I'm always eager to learn, grow, and contribute to impactful projects in the tech world.
      </p>
    </div>
  </div>
);

export default AboutMe;
