import React from 'react';
import '../styles/questions-card.scss';
import Button from './Button';

interface QuestionsCardProps {
  title: string;
  description: string;
  operatingHours: string;
  buttonText: string;
}

const QuestionsCard: React.FC<QuestionsCardProps> = ({
  title,
  description,
  operatingHours,
  buttonText,
}) => {
  return (
    <div className="questions-card">
      <div className="questions-card__header">
        <div className="questions-card__icon">💬</div>
        <h4 className="questions-card__title">{title}</h4>
      </div>
      <p className="questions-card__description">{description}</p>
      <p className="questions-card__hours">{operatingHours}</p>
      {/* <button className="questions-card__button" disabled>
        {buttonText}
      </button> */}
      <Button
        text={buttonText}
        variant="primary"
        size="small"
        rounded={true}
        disabled={true} // Set to true if you want the button disabled
      />
    </div>
  );
};

export default QuestionsCard;
