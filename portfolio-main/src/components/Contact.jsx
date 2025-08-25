import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewh3e6i",    // Your EmailJS Service ID
        "template_uz4p62v",   // Your EmailJS Template ID
        form.current,
        "KMMyPuGDmwLAINb9S"  // Your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Failed to send message, please try again later.");
      });

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2>
        <span className="colored-title">Contact</span> <span className="me-title">Me</span>
      </h2>
      <div className="contact-main">
        <div className="contact-form-side">
          <h3 className="contact-subtitle">GET IN TOUCH</h3>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" required />
            <input type="email" name="user_email" placeholder="Email Id" required />
            <textarea name="message" placeholder="Message" required rows={5} />
            <motion.button
              type="submit"
              className="contact-submit"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </form>
        </div>
        <div className="contact-info-side">
          <ul className="contact-info-list">
            <li>
              <FaEnvelope className="contact-icon" />
              vijay.shriram157@gmail.com
            </li>
            <li>
              <FaPhone className="contact-icon" />
              +91 9150200538
            </li>
            <li>
              <FaInstagram className="contact-icon" />
              @i_am_vj_shriram
            </li>
            <li>
              <FaLinkedin className="contact-icon" />
              @vijay-shriram
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
