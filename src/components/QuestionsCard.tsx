import React from 'react';
import '../styles/questions-card.scss';
import Button from './Button';
import msgIcon from '../assets/msg_icon.png';

/**
 * Props for the QuestionsCard component.
 *
 * @interface QuestionsCardProps
 * @property {string} title - The title of the questions card.
 * @property {string} description - A brief description or message related to the questions card.
 * @property {string} operatingHours - The operating hours displayed in the card.
 * @property {string} buttonText - The text for the button in the card.
 */
interface QuestionsCardProps {
  title: string;
  description: string;
  operatingHours: string;
  buttonText: string;
}

/**
 * A card component that displays a title, description, operating hours, and a disabled button.
 * It also includes an icon and is styled with a custom design.
 *
 * @component
 * @param {QuestionsCardProps} props - The props for the component.
 * @returns {React.FC} - The QuestionsCard component.
 */
const QuestionsCard: React.FC<QuestionsCardProps> = ({
  title,
  description,
  operatingHours,
  buttonText,
}) => {
  return (
    <div className="questions-card">
      <div className="questions-card__header">
        {/* Icon for the question card */}
        <div className="questions-card__icon">
          <img src={msgIcon} />
        </div>

        {/* Title of the card */}
        <h4 className="questions-card__title">{title}</h4>
      </div>

      {/* Description of the card */}
      <p className="quest-card-body-description">{description}</p>

      {/* Operating hours displayed in the card */}
      <p className="quest-card-body-description">{operatingHours}</p>

      <div className="flex-end">
        {/* Button with passed text, styled as primary and disabled */}
        <Button
          text={buttonText}
          variant="primary"
          size="small"
          rounded={true}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default QuestionsCard;
