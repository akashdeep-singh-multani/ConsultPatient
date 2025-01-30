export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // Extendable for different styles
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  rounded?: boolean;
}
