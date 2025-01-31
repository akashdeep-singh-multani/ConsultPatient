import React from 'react';
import { CardProps } from '../interfaces/CardPops';

// Lazy loading the MdArrowDropDown icon from react-icons
const MdArrowDropDown = React.lazy(() =>
  import('react-icons/md').then((module) => ({
    default: module.MdArrowDropDown,
  })),
);
import '../styles/card.scss';
import { FAQ_LIST } from '../constants/constants';
import CollapsibleList from './CollapsibleList';

/**
 * Props for the Card component.
 *
 * @interface CardProps
 * @property {string} title - The title of the card.
 * @property {string} description - The description text displayed in the card.
 * @property {string} [buttonLabel] - Optional label for the "Read more" button.
 */

/**
 * A memoized card component that displays a title, description, and an optional "Read more" button.
 * It also displays a collapsible FAQ list on the right side of the card.
 *
 * @component
 * @param {CardProps} props - The props for the component.
 * @returns {React.FC} - The Card component.
 */
const Card: React.FC<CardProps> = React.memo(
  ({ title, description, buttonLabel }) => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-left">
            {/* Title of the card */}
            <h5 className="sub-heading">{title}</h5>

            {/* Description text inside the card */}
            <p className="card-text">{description}</p>

            {/* Conditionally render the "Read more" button with a lazy-loaded icon */}
            {buttonLabel && (
              <button className="read-more-btn">
                Read more
                {/* Suspense wrapper for lazy-loaded MdArrowDropDown icon */}
                <React.Suspense fallback={<div>Loading Icon...</div>}>
                  <MdArrowDropDown className="icon" />
                </React.Suspense>
              </button>
            )}
          </div>

          {/* Right section containing the collapsible FAQ list */}
          <aside className="card-right">
            <CollapsibleList items={FAQ_LIST} />
          </aside>
        </div>
      </div>
    );
  },
);

export default Card;
