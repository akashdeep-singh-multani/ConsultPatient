import React from 'react';
import '../styles/info-card.scss';

/**
 * Props for the InfoCard component.
 *
 * @interface InfoCardProps
 * @property {string} title - The title displayed at the top of the info card.
 * @property {string} content - The content displayed inside the info card.
 * @property {string} [linkText] - Optional text for a clickable link at the bottom of the card.
 */
interface InfoCardProps {
  title: string;
  content: string;
  linkText?: string;
}

/**
 * A simple card component that displays a title, content, and an optional clickable link.
 *
 * @component
 * @param {InfoCardProps} props - The props for the component.
 * @returns {React.FC} - The InfoCard component.
 */
const InfoCard: React.FC<InfoCardProps> = ({ title, content, linkText }) => {
  return (
    <div className="info-card">
      {/* Title of the card */}
      <h4 className="info-card__title">{title}</h4>

      {/* Content inside the card */}
      <p className="info-card__content">{content}</p>

      {/* Conditionally render the link if linkText is provided */}
      {linkText && (
        <a href="#" className="info-card__link">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default InfoCard;
