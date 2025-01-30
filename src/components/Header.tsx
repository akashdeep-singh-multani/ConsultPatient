import React, { useState, Suspense, lazy } from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

// Lazy loading components
const Logo = lazy(() => import('./Header/Logo'));
const HamburgerMenu = lazy(() => import('./Header/HamburgerMenu'));
const UserAvatar = lazy(() => import('./Header/UserAvatar'));
const UserDropdown = lazy(() => import('./Header/UserDropdown'));

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
      {/* Suspense wrapper for lazy-loaded components */}
      <Suspense fallback={<div>Loading Logo...</div>}>
        <Logo />
      </Suspense>

      {/* Hamburger for mobile */}
      <Suspense fallback={<div>Loading Menu...</div>}>
        <HamburgerMenu onClick={toggleNav} />
      </Suspense>

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
        <Suspense fallback={<div>Loading Avatar...</div>}>
          <UserAvatar userName="John" onClick={toggleDropdown} />
        </Suspense>
        {dropdownOpen && (
          <Suspense fallback={<div>Loading Dropdown...</div>}>
            <UserDropdown />
          </Suspense>
        )}
      </div>
    </header>
  );
};

export default Header;
