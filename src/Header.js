import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={menuOpen ? 'open' : ''}>
      <div className="logo"><Link to='/'>Maria Menechini</Link></div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Sobre">Sobre</Link></li>
          <li><Link to="/Projetos">Projetos</Link></li>
          <li><Link to="/Contatos">Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

