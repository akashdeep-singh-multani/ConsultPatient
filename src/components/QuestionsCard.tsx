import React from 'react';
import '../styles/questions-card.scss';

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
      <div className="questions-card__icon">💬</div>
      <h4 className="questions-card__title">{title}</h4>
      <p className="questions-card__description">{description}</p>
      <p className="questions-card__hours">{operatingHours}</p>
      <button className="questions-card__button" disabled>
        {buttonText}
      </button>
    </div>
  );
};

export default QuestionsCard;
