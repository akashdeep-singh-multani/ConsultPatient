import React from 'react';
import { CardProps } from '../interfaces/CardPops';
// Lazy load the MdArrowDropDown icon to improve initial load time
const MdArrowDropDown = React.lazy(() =>
  import('react-icons/md').then((module) => ({
    default: module.MdArrowDropDown,
  })),
);
import '../styles/card.scss';
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

          <div className="card-right">
            <CollapsibleList items={FAQ_LIST} />
          </div>
        </div>
      </div>
    );
  },
);

export default Card;
