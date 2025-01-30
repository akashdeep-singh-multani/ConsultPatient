import React from 'react';
import '../styles/info-card.scss';

interface InfoCardProps {
  title: string;
  content: string;
  linkText?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, linkText }) => {
  return (
    <div className="info-card">
      <h4 className="info-card__title">{title}</h4>
      <p className="info-card__content">{content}</p>
      {linkText && (
        <a href="#" className="info-card__link">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default InfoCard;
