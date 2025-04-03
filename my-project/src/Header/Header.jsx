import React, { useState, useEffect } from 'react';
import './style.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="list">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="/cv_adriely.pdf">Baixar CV</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

