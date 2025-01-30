// src/components/Header/HamburgerMenu.tsx
import React from 'react';

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <div className="header__hamburger" onClick={onClick}>
      <div className="header__hamburger-line"></div>
      <div className="header__hamburger-line"></div>
      <div className="header__hamburger-line"></div>
    </div>
  );
};

export default HamburgerMenu;
