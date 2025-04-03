import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './style.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className='contact'>
        <a href="https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="link" />
        </a>
        <SiGmail className="gmail" />
        <h5 className="contact-text">queirozadriely444@gmail.com</h5>
      </div>
    </div>
  );
};

export default Contact;

