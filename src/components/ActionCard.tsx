import React from 'react';
import '../styles/action-card.scss';
import { ActionCardProps } from '../interfaces/ActionCardProps'; // Importing ActionCardProps from an external file
import Button from './Button';

/**
 * ActionCard component displays a title, description, and a button.
 * The button triggers an action when clicked.
 *
 * @component
 * @param {ActionCardProps} props - The props for the component.
 * @returns {React.FC} - The ActionCard component.
 */
const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  buttonVariant = 'primary',
}) => {
  return (
    <div className="action-card">
      <div className="content">
        <h3 className="sub-heading">{title}</h3>
        <p className="card-body-description">{description}</p>
      </div>
      <Button
        text={buttonText}
        onClick={onButtonClick}
        variant={buttonVariant}
        size="small"
      />
    </div>
  );
};

export default ActionCard;
