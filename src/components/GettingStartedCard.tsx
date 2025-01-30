import React from 'react';
import SimpleCard from './SimpleCard';
import { GettingStartedData } from '../interfaces/GettingStartedData';
import AboutMedicationCard from './AboutMedicationCard';
import ArticleSuggestion from './ArticleSuggestion';
import '../styles/dash-card.scss';

interface GettingStartedCardProps {
  gettingStartedData: GettingStartedData;
}

const GettingStartedCard: React.FC<GettingStartedCardProps> = ({
  gettingStartedData,
}) => {
  const { heading, description, medicationInfo } = gettingStartedData;

  return (
    <div className="dash-card">
      {/* Left Column */}
      <div className="left-section">
        <SimpleCard title={heading} description={description} />

        <AboutMedicationCard {...medicationInfo} />
      </div>

      {/* Right Column */}
      <div className="right-section">
        <ArticleSuggestion {...gettingStartedData} />
      </div>
    </div>
  );
};

export default GettingStartedCard;
