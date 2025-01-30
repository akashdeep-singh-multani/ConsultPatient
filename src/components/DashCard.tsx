import React, { Suspense } from 'react';
import ActionCard from './ActionCard';
import InfoCard from './InfoCard';
import LoadingSkeleton from './LoadingSkeleton';
import QuestionsCard from './QuestionsCard';
import SimpleCard from './SimpleCard';
import { DashCardProps } from '../interfaces/DashCardProps';
import {
  QUESTIONS_CARD_TITLE,
  BOOKING_INFO_TITLE,
  BOOKING_DESC,
  REMINDER_TITLE,
  REMINDER_DESC,
} from '../constants/constants';
import '../styles/dash-card.scss';

const DashCard: React.FC<DashCardProps> = ({ dashData }) => {
  const { heading, description, services, questionCardData } = dashData;

  return (
    <div className="dash-card">
      {/* Left Column */}
      <div className="left-section">
        <SimpleCard title={heading} description={description} />

        {services.map((service, index) => (
          <Suspense
            key={service.id}
            fallback={<LoadingSkeleton height="200px" />}
          >
            <ActionCard
              key={index}
              title={service.title}
              description={service.content}
              buttonText={service.buttonLabel}
              onButtonClick={() => alert(service.buttonLabel)}
            />
          </Suspense>
        ))}
      </div>

      {/* Right Column */}
      <div className="right-section">
        <QuestionsCard
          title={QUESTIONS_CARD_TITLE}
          description={questionCardData.description}
          operatingHours={questionCardData.operatingHours}
          buttonText={questionCardData.buttonLabel}
        />
        <br></br>
        <InfoCard title={BOOKING_INFO_TITLE} content={BOOKING_DESC} />
        <br></br>
        <InfoCard title={REMINDER_TITLE} content={REMINDER_DESC} />
      </div>
    </div>
  );
};

export default DashCard;
