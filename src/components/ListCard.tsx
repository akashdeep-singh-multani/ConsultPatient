import React from 'react';
import { CardProps } from '../interfaces/CardPops';
// Lazy load the MdArrowDropDown icon to improve initial load time
const MdArrowDropDown = React.lazy(() =>
  import('react-icons/md').then((module) => ({
    default: module.MdArrowDropDown,
  })),
);
import '../styles/card.scss';
// import { FAQ_LIST } from '../constants/constants';
// import CollapsibleList from './CollapsibleList';
// import QuestionsCard from './QuestionsCard';
// import InfoCard from './InfoCard';
import { FAQ_LIST } from '../constants/constants';
import CollapsibleList from './CollapsibleList';

const Card: React.FC<CardProps> = React.memo(
  ({ title, description, buttonLabel }) => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-left">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {buttonLabel && (
              <button className="read-more-btn">
                Read more
                {/* Lazy-loaded icon */}
                <React.Suspense fallback={<div>Loading Icon...</div>}>
                  <MdArrowDropDown className="icon" />
                </React.Suspense>
              </button>
            )}
          </div>

          {/* <div className="card-right"> */}
          {/* <CollapsibleList items={FAQ_LIST} /> */}
          <aside className="card-right">
            {/* <QuestionsCard
              title="Questions?"
              description="Ask an expert about your treatment."
              operatingHours="Operating hours: 9am - 5.30pm Australian Eastern Time"
              buttonText="Chat with us"
            /> */}
            <CollapsibleList items={FAQ_LIST} />
            {/* <InfoCard
              title="Your nurse call booking:"
              content="No current booking"
              linkText="View history"
            />
            <InfoCard title="Your reminders" content="No current booking" /> */}
          </aside>

          {/* </div> */}
        </div>
      </div>
    );
  },
);

export default Card;
