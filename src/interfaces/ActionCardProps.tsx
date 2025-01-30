export interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  buttonVariant?: 'primary' | 'secondary';
}
