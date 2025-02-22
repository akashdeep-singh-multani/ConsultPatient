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

/**
 * Props for the DashCard component.
 *
 * @interface DashCardProps
 * @property {Object} dashData - Data used to populate the dashboard content.
 * @property {string} dashData.heading - The title displayed on the left column.
 * @property {string} dashData.description - The description displayed on the left column.
 * @property {Array} dashData.services - A list of services to display, each containing a title, content, and button label.
 * @property {Object} dashData.questionCardData - Data for the questions card, including description, operating hours, and button label.
 */

/**
 * A dashboard component that displays a variety of cards with dynamic content, including service cards, questions, and information.
 *
 * @component
 * @param {DashCardProps} props - The props for the component.
 * @returns {React.FC} - The DashCard component.
 */
const DashCard: React.FC<DashCardProps> = ({ dashData }) => {
  const { heading, description, services, questionCardData } = dashData;

  return (
    <div className="dash-card">
      {/* Left Column */}
      <div className="left-section">
        <SimpleCard title={heading} description={description} />
        {/* <br></br> */}
        <h2 className="sub-heading pad-left">Services</h2>
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
        <br />
        <InfoCard title={BOOKING_INFO_TITLE} content={BOOKING_DESC} />
        <br />
        <InfoCard title={REMINDER_TITLE} content={REMINDER_DESC} />
      </div>
    </div>
  );
};

export default DashCard;
