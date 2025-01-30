// src/components/Header/Navigation.tsx
import React from 'react';

interface NavigationProps {
  isNavOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isNavOpen }) => {
  return (
    <nav className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}>
      <a href="#home" className="header__nav-link">
        Home
      </a>
      <a href="#faq" className="header__nav-link">
        FAQ
      </a>
      <a href="#help" className="header__nav-link">
        Help
      </a>
    </nav>
  );
};

export default Navigation;
