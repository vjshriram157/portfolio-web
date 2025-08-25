import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaHeart, FaBriefcase, FaEnvelope, FaClipboardList, FaUserGraduate, FaAward } from 'react-icons/fa';
import './Navbar.css';

const navItems = [
  { to: 'home', icon: <FaHome />, label: 'Home' },
  { to: 'about', icon: <FaUser />, label: 'About' },
  { to: 'skills', icon: <FaHeart />, label: 'Skills' },
  { to: 'education', icon: <FaUserGraduate />, label: 'Education' },   // NEW
  { to: 'certification', icon: <FaAward />, label: 'Certifications' }, // NEW
  { to: 'projects', icon: <FaClipboardList />, label: 'Projects' },
  { to: 'hire', icon: <FaBriefcase />, label: 'Hire' },                // updated from camera
  { to: 'contact', icon: <FaEnvelope />, label: 'Contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Bottom Icon Bar */}
      <nav className={`bottom-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
  {navItems.map(item => (
    <li key={item.to} onClick={() => setMenuOpen(false)}>
      <Link
        to={item.to}
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="active"
        title={item.label}
      >
        {item.icon}
      </Link>
    </li>
  ))}
</ul>

      </nav>

      {/* Overlay to close menu */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Navbar;
