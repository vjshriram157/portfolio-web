import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Personal Portfolio",
    description:
      "A web portfolio built with React, Node.js, and MongoDB.",
    link: "#", // Replace this # with your live portfolio site or repo URL
  },
  {
    title: "Movie Recommendation System",
    description:
      "Developed a web-based movie recommendation system that uses both collaborative filtering and content-based filtering to provide personalized movie suggestions.",
    link: "#",
  },
  {
    title: "Bloody Quiz – Interactive Quiz Board Game",
    description:
      "Created a quiz-based board game where users progress across a virtual board by answering questions correctly.",
    link: "#",
  }
];

const Projects = () => (
  <section className="projects-section" id="projects">
    
    <h2 className="projects-heading">
      <center><span className="heading-white">My</span>{' '}</center>
      <center><span className="heading-purple">Projects</span></center>
    </h2>
    
    <div className="projects-list">
      {projectData.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-desc">{proj.description}</p>
          {proj.link && (
            <a
              className="project-btn"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
