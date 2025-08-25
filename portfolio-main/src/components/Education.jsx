import React from 'react';
import './Education.css';

const educationData = [
  {
    label: "SSLC",
    value: "GRACE Matriculation Higher Secondary School, Chennai",
    detail: "SCORED 80%",
    year: "2020–2021",
  },
  {
    label: "HSC",
    value: "GRACE Matriculation Higher Secondary School, Chennai",
    detail: "SCORED 82%",
    year: "2021–2022",
  },
  {
    label: "BE CSE",
    value: "Meenakshi College of Engineering, Anna University",
    detail: "Computer Science & Engineering, CGPA: 8.1/10 (Expected May 2026).",
    year: "2022–2026",
  }
];

const Education = () => (
  <section id="education" className="info-card-section">
    <h2>
      My <span className="highlight">Education</span>
    </h2>
    <div className="info-card-list">
      {educationData.map((edu, idx) => (
        <div className="info-card" key={idx}>
          <h3 className="info-label">{edu.label}</h3>
          <span className="info-value">{edu.value}</span>
          <p className="info-detail">{edu.detail}</p>
          <span className="info-year">{edu.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
