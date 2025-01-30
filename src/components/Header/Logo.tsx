// src/components/Header/Logo.tsx
import React from 'react';
import logo from '../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="header__logo">
      <img src={logo} alt="Logo" className="header__logo-image" />
    </div>
  );
};

export default Logo;
