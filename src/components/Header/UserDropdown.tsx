// src/components/Header/UserDropdown.tsx
import React from 'react';

const UserDropdown: React.FC = () => {
  return (
    <div className="header__dropdown">
      <ul>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
        <li>
          <a href="#logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
