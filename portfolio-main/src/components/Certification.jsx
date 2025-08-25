import React from 'react';
import './Certification.css';

const certificationData = [
  {
    label: "Django Framework",
    value: "V3 TechServe",
  },
  {
    label: "Software Development Life Cycle",
    value: "DelQ Solutions",
  },
  {
    label: "Introduction to Cybersecurity",
    value: "Cisco",
  },
  {
    label: "Python Programming",
    value: "Codsoft",
  },
  {
    label: "Spoken English Intensive (Intermediate)",
    value: "British Council, India",
  }
];

const Certification = () => (
  <section id="certification" className="info-card-section">
    <h2>
      My <span className="highlight">Certifications</span>
    </h2>
    <div className="info-card-list">
      {certificationData.map((cert, idx) => (
        <div className="info-card" key={idx}>
          <h3 className="info-label">{cert.label}</h3>
          <span className="info-value">{cert.value}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Certification;
