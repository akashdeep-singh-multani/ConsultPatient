import React from 'react';
import '../styles/button.scss';
import { ButtonProps } from '../interfaces/ButtonProps';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  rounded = false,
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${rounded ? 'rounded' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
