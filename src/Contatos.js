import React from 'react';
import './Contatos.css'; 
import { Link } from 'react-router-dom';

export const Contatos = () => {
  return (
    <section id="contatos">
      <div className="content-container">
        <ul>
          <li>
            <Link to="https://www.linkedin.com/mariamenechini" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon"></i> Linkedin
            </Link>
          </li>
          <li>
            <Link to="https://github.com/marizao" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon"></i> GitHub
            </Link>
          </li>
          <li>
            <Link to="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp icon"></i> Whatsapp
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
