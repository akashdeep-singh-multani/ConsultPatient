import React from 'react';
import '../styles/action-card.scss';
import { ActionCardProps } from '../interfaces/ActionCardProps';
import Button from './Button';

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
        <h3>{title}</h3>
        <p>{description}</p>
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
