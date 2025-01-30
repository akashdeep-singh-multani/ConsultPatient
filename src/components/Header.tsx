import React, { useState } from 'react';
import '../styles/header.scss';
// import logo from '../assets/logo.png';
import Logo from './Header/Logo';
import HamburgerMenu from './Header/HamburgerMenu';
import UserAvatar from './Header/UserAvatar';
import UserDropdown from './Header/UserDropdown';
import { Link } from 'react-router-dom';

// Header Component
const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('home'); // state to track active link

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // Handle click for setting active link
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsNavOpen(false); // Close nav on link click (for mobile)
  };

  return (
    <header className="header">
      <Logo />

      {/* Hamburger for mobile */}
      <HamburgerMenu onClick={toggleNav} />

      <nav className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}>
        <Link
          to="#home"
          className={`header__nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </Link>
        <Link
          to="#faq"
          className={`header__nav-link ${activeLink === 'faq' ? 'active' : ''}`}
          onClick={() => handleLinkClick('faq')}
        >
          FAQ
        </Link>
        <Link
          to="#help"
          className={`header__nav-link ${activeLink === 'help' ? 'active' : ''}`}
          onClick={() => handleLinkClick('help')}
        >
          Help
        </Link>
      </nav>

      <div className="header__user-info">
        <UserAvatar userName="John" onClick={toggleDropdown} />
        {dropdownOpen && <UserDropdown />}
      </div>
    </header>
  );
};
export default Header;
