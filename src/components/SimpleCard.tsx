import React from 'react';
import { SimpleCardProps } from '../interfaces/SimpleCardProps';

/**
 * Props for the SimpleCard component.
 *
 * @interface SimpleCardProps
 * @property {string} title - The title to be displayed at the top of the card.
 * @property {string} description - The description text displayed inside the card.
 */

/**
 * A simple card component that displays a title and description.
 * This is often used to display brief content in a compact format.
 *
 * @component
 * @param {SimpleCardProps} props - The props for the component.
 * @returns {React.FC} - The SimpleCard component.
 */
const SimpleCard: React.FC<SimpleCardProps> = ({ title, description }) => {
  return (
    <div className="simple-card">
      {/* Title of the card */}
      <h2 className="heading">{title}</h2>

      {/* Description text inside the card */}
      <p>{description}</p>
    </div>
  );
};

export default SimpleCard;
