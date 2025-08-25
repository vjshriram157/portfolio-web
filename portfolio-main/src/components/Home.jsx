import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Home.css';

function Home() {
  return (
    <motion.section
      id="home"
      className="hero-section section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="home-heading">
  <span className="heading-white">Hi, I'm</span>{' '}
  <span className="heading-purple">Vijay Shriram BS</span>
</h1>

     <h3 className="home-subheading">Frontend Web Developer</h3>

      <div className="hero-actions">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hero-btn"
        >
          Hire Me
        </Link>
        {/* Change this button to anchor for opening the resume */}
        <a
          className="hero-btn"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <strong>3+</strong>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="hero-stat">
          <span id="hii">Fresher</span>

          <span className="stat-label">Eager to contribute and grow</span>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
