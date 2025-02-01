// src/components/Header/UserAvatar.tsx
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

interface UserAvatarProps {
  userName: string;
  onClick: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userName, onClick }) => {
  return (
    <div className="flex-container">
      <div className="header__avatar" onClick={onClick}>
        {userName[0].toUpperCase()}
      </div>
      <div className="sm-hide-container">
        <span className="header__user-name">{userName}</span>&nbsp;
        <React.Suspense fallback={<div>Loading Icon...</div>}>
          <MdArrowDropDown className="icon" />
        </React.Suspense>
      </div>
    </div>
  );
};

export default UserAvatar;
