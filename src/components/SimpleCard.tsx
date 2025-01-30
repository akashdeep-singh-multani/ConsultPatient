import React from 'react';
import { SimpleCardProps } from '../interfaces/SimpleCardProps';

const SimpleCard: React.FC<SimpleCardProps> = ({ title, description }) => {
  return (
    <div className="simple-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SimpleCard;
