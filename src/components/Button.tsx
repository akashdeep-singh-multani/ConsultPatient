import React from 'react';
import '../styles/button.scss';
import { ButtonProps } from '../interfaces/ButtonProps';

/**
 * Props for the Button component.
 *
 * @interface ButtonProps
 * @property {string} text - The text displayed on the button.
 * @property {Function} onClick - The callback function to execute when the button is clicked.
 * @property {string} [variant] - The style variant of the button (e.g., 'primary', 'secondary'). Defaults to 'primary'.
 * @property {string} [size] - The size of the button (e.g., 'small', 'medium', 'large'). Defaults to 'medium'.
 * @property {boolean} [disabled] - Whether the button is disabled. Defaults to false.
 * @property {boolean} [rounded] - Whether the button has rounded corners. Defaults to false.
 */

/**
 * A button component that can be customized with different styles, sizes, and behaviors.
 *
 * @component
 * @param {ButtonProps} props - The props for the button component.
 * @returns {React.FC} - The Button component.
 */
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  rounded,
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
