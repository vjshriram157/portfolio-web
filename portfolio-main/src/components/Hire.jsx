import React from 'react';
import hirepic from '../assets/hire me .jpg';
import { Link } from 'react-scroll';

function Hire() {
  return (
    <section id="hire" className="section hire-flex">
      <div className="hire-imagebox">
        <img src={hirepic} alt="Developing" className="hire-image" />
      </div>
      <div className="hire-content">
        <h2 className="projects-title">Hire Me</h2>
        <span className="projects-subtitle">FOR YOUR PROJECTS</span>
        <p>
          I&apos;m available to work on your exciting ideas and help turn them into real-world web applications. Whether you need a responsive front-end, a dynamic back-end, or full-stack support, I&apos;m here to bring value to your project.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hire-btn"
        >
          Hire Me
        </Link>
      </div>
    </section>
  );
}

export default Hire;
