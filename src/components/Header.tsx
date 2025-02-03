import React, { useState, Suspense, lazy } from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

// Lazy loading components
const Logo = lazy(() => import('./Header/Logo'));
const HamburgerMenu = lazy(() => import('./Header/HamburgerMenu'));
const UserAvatar = lazy(() => import('./Header/UserAvatar'));
// const UserDropdown = lazy(() => import('./Header/UserDropdown'));

/**
 * A header component that includes a logo, navigation links, a hamburger menu for mobile, and a user avatar with a dropdown.
 * The component supports lazy loading of individual parts for better performance.
 *
 * @component
 * @returns {React.FC} - The Header component.
 */
const Header: React.FC = () => {
  // State to manage the dropdown open/close state
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // State to manage the navigation menu open/close state (for mobile)
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // State to track the active navigation link
  const [activeLink, setActiveLink] = useState<string>('home');

  /**
   * Toggles the user dropdown menu visibility.
   */
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  /**
   * Toggles the navigation menu visibility (for mobile).
   */
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  /**
   * Handles link click to set the active link and close the navigation menu on mobile.
   *
   * @param {string} link - The clicked link identifier (home, faq, help).
   */
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsNavOpen(false); // Close the nav on link click for mobile view
  };

  return (
    <header className="header">
      {/* Suspense wrapper for lazy-loaded Logo component */}
      <Suspense fallback={<div>Loading Logo...</div>}>
        <Logo />
      </Suspense>

      <div className="flex-end">
        {/* Navigation menu */}
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
        {/* Suspense wrapper for lazy-loaded HamburgerMenu component */}
        <Suspense fallback={<div>Loading Menu...</div>}>
          <HamburgerMenu onClick={toggleNav} />
        </Suspense>

        {/* User information section */}
        <div className="header__user-info">
          {/* Suspense wrapper for lazy-loaded UserAvatar component */}
          <Suspense fallback={<div>Loading Avatar...</div>}>
            <UserAvatar userName="John" onClick={toggleDropdown} />
          </Suspense>

          {/* Conditionally render UserDropdown if the dropdown is open */}
          {/* {dropdownOpen && (
            <Suspense fallback={<div>Loading Dropdown...</div>}>
              <UserDropdown />
            </Suspense>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
