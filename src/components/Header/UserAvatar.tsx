// src/components/Header/UserAvatar.tsx
import React from 'react';

interface UserAvatarProps {
  userName: string;
  onClick: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userName, onClick }) => {
  return (
    <div className="header__user">
      <div className="header__avatar" onClick={onClick}>
        {userName[0].toUpperCase()}
      </div>
      {/* <span className="header__user-name">{userName}</span> */}
    </div>
  );
};

export default UserAvatar;
