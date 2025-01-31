import React from 'react';
import SimpleCard from './SimpleCard';
import { GettingStartedData } from '../interfaces/GettingStartedData';
import AboutMedicationCard from './AboutMedicationCard';
import ArticleSuggestion from './ArticleSuggestion';
import '../styles/dash-card.scss';

/**
 * Props for the GettingStartedCard component.
 *
 * @interface GettingStartedCardProps
 * @property {GettingStartedData} gettingStartedData - Data used to populate the Getting Started content, including title, description, and medication info.
 */

interface GettingStartedCardProps {
  gettingStartedData: GettingStartedData;
}

/**
 * A component that displays a "Getting Started" card with medication information and article suggestions.
 * The component renders a SimpleCard on the left and collapsible articles and medication details on the right.
 *
 * @component
 * @param {GettingStartedCardProps} props - The props for the component.
 * @returns {React.FC} - The GettingStartedCard component.
 */
const GettingStartedCard: React.FC<GettingStartedCardProps> = ({
  gettingStartedData,
}) => {
  const { heading, description, medicationInfo } = gettingStartedData;

  return (
    <div className="gettingStartedContainer">
      <SimpleCard title={heading} description={description} />
      <div className="dash-card">
        {/* Left Column */}
        <div className="left-section">
          <AboutMedicationCard {...medicationInfo} />
        </div>

        {/* Right Column */}
        <div className="right-section">
          <ArticleSuggestion {...gettingStartedData} />
        </div>
      </div>
    </div>
  );
};

export default GettingStartedCard;
