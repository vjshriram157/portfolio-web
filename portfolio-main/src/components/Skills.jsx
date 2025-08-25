import React, { useState } from 'react';

import htmlLogo from '../assets/html5.png';
import cssLogo from '../assets/css.png';
import bootstrapLogo from '../assets/bootstrap.png';
import tailwindLogo from '../assets/tailwindcss.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';        // Use PNG (not SVG) for uniform display
import nodejsLogo from '../assets/nodedotjs.png';
import apiLogo from '../assets/REST API.png';
import postmanLogo from '../assets/postman.png';     // Use 'postman.png' for uniformity
import mysqlLogo from '../assets/mysql.png';
import mongodbLogo from '../assets/mongodb.png';     // Use 'mongodb.png', matches asset
import javaLogo from '../assets/java.webp';
import gitLogo from '../assets/git.png';             // Use 'git.png', matches asset
import githubLogo from '../assets/github.png';       // Use 'github.png', matches asset
import excelLogo from '../assets/ms excel.webp';  
import './Skills.css';

const skillsData = [
  {
    id: 1,
    name: "HTML",
    logo: htmlLogo,
    shortDesc: "Markup language for structuring web pages",
    detailDesc: [
      "Defines the structure of web pages.",
      "Uses tags like headings, paragraphs, and links.",
      "Semantic elements improve accessibility.",
      "Core language for frontend development.",
      "Easily integrates with CSS and JavaScript."
    ],
  },
  {
    id: 2,
    name: "CSS",
    logo: cssLogo,
    shortDesc: "Styles web elements and page layout",
    detailDesc: [
      "Controls layout, colors, and fonts.",
      "Supports responsive design.",
      "Works with Flexbox, Grid, and media queries.",
      "Used for animations and transitions."
    ],
  },
  {
    id: 3,
    name: "Bootstrap",
    logo: bootstrapLogo,
    shortDesc: "Framework for responsive web design",
    detailDesc: [
      "Prebuilt components and design system.",
      "Grid system for layouts.",
      "Easily customizable themes.",
      "Speeds up frontend development."
    ],
  },
  {
    id: 4,
    name: "Tailwind CSS",
    logo: tailwindLogo,
    shortDesc: "Utility-first CSS framework for styling",
    detailDesc: [
      "Utility classes for rapid UI creation.",
      "Fully customizable.",
      "Enables responsive and mobile-first design.",
      "Popular with React and modern frameworks."
    ],
  },
  {
    id: 5,
    name: "JavaScript",
    logo: jsLogo,
    shortDesc: "Adds interactivity to web pages easily",
    detailDesc: [
      "Core scripting language for the web.",
      "Supports DOM manipulation and AJAX.",
      "Used for single-page applications.",
      "ES6+ features improve productivity.",
      "Vast ecosystem (NPM, frameworks, tooling)."
    ],
  },
  {
    id: 6,
    name: "React.js",
    logo: reactLogo,
    shortDesc: "Library for building user interfaces",
    detailDesc: [
      "Component-based architecture.",
      "Supports hooks and state management.",
      "Used for dynamic and interactive UIs.",
      "Large community and ecosystem."
    ],
  },
  {
    id: 7,
    name: "Node.js",
    logo: nodejsLogo,
    shortDesc: "JavaScript runtime for backend services",
    detailDesc: [
      "Runs JavaScript on the server.",
      "Non-blocking I/O and event-driven.",
      "Foundation for express, REST APIs, etc.",
      "Great with MongoDB and real-time apps."
    ],
  },
  {
    id: 8,
    name: "Rest API",
    logo: apiLogo,
    shortDesc: "Enables client-server communication protocol",
    detailDesc: [
      "Standard for web services.",
      "Stateless client-server architecture.",
      "Uses HTTP methods (GET, POST, PUT, DELETE).",
      "Enables integration with other applications."
    ],
  },
  {
    id: 9,
    name: "Postman",
    logo: postmanLogo,
    shortDesc: "Tool for testing RESTful APIs easily",
    detailDesc: [
      "API request/response debugging.",
      "Automates API tests.",
      "Collaboration and documentation tools.",
      "Great for developers and QA teams."
    ],
  },
  {
    id: 10,
    name: "MySQL",
    logo: mysqlLogo,
    shortDesc: "Relational database for data storage",
    detailDesc: [
      "Stores structured data in tables.",
      "Uses SQL for data management.",
      "Reliability and scalability.",
      "Widely used in web applications."
    ],
  },
  {
    id: 11,
    name: "MongoDB",
    logo: mongodbLogo,
    shortDesc: "NoSQL database for flexible data storage",
    detailDesc: [
      "Stores JSON-like documents.",
      "Flexible schema design.",
      "Great for rapid iterations.",
      "Popular in MERN stack."
    ],
  },
  {
    id: 12,
    name: "Java",
    logo: javaLogo,
    shortDesc: "Object-oriented language for development",
    detailDesc: [
      "Strongly typed, platform-independent.",
      "Used in Android, enterprise, web apps.",
      "Supports OOP principles.",
      "Large libraries and frameworks."
    ],
  },
  {
    id: 13,
    name: "Git",
    logo: gitLogo,
    shortDesc: "Version control system",
    detailDesc: [
      "Tracks code changes collaboratively.",
      "Supports branching and merging.",
      "Works with platforms like GitHub & GitLab.",
      "Essential for modern software development."
    ],
  },
  {
    id: 14,
    name: "GitHub",
    logo: githubLogo,
    shortDesc: "Code hosting and collaboration platform",
    detailDesc: [
      "Hosts Git repositories in the cloud.",
      "Supports pull requests and code review.",
      "Offers actions and CI/CD integration.",
      "Widely used for open-source projects."
    ],
  },
  {
    id: 15,
    name: "MS Excel",
    logo: excelLogo,
    shortDesc: "Spreadsheet application for data analysis",
    detailDesc: [
      "Performs data calculations and visualization.",
      "Pivot tables and charts.",
      "Supports formulas, macros, and automation.",
      "Essential for reporting and analytics."
    ],
  },
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const openModal = (skill) => setActiveSkill(skill);
  const closeModal = () => setActiveSkill(null);

  return (
    <div className="skills-section" id="skills">
      <center><h2>
  <span className="heading-white">My</span> <span className="heading-purple">Skills</span>
</h2></center>


      <div className={`skills-grid ${activeSkill ? 'modal-open' : ''}`}>
        {skillsData.map(skill => (
          <div
            key={skill.id}
            className={`skill-card ${activeSkill && activeSkill.id !== skill.id ? 'faded' : ''}`}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} height={40} />
            <h3>{skill.name}</h3>
            <p><em>{skill.shortDesc}</em></p>
            <button onClick={() => openModal(skill)} aria-label={`Show details about ${skill.name}`}>→</button>
          </div>
        ))}
      </div>

      {activeSkill && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <img src={activeSkill.logo} alt={`${activeSkill.name} logo`} height={50} />
            <h3>{activeSkill.name}</h3>
            <ul>
              {activeSkill.detailDesc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
