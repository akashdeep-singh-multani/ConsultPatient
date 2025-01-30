import React, { useState } from 'react';
import { CardProps } from '../interfaces/CardPops';
import { MdArrowDropDown } from 'react-icons/md';
import '../styles/card.scss';
import { FAQ_LIST } from '../constants/constants';

const Card: React.FC<CardProps> = ({ title, description, buttonLabel }) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleFAQToggle = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-left">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {buttonLabel && (
            <button className="read-more-btn">
              Read more
              <MdArrowDropDown className="icon" />
            </button>
          )}
        </div>

        <div className="card-right">
          <h6>FAQ</h6>
          <ul className="faq-list">
            {FAQ_LIST.map((faq, index) => (
              <div>
                <li
                  key={index}
                  className="faq-item"
                  onClick={() => handleFAQToggle(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-arrow">
                    {expandedFAQ === index ? <MdArrowDropDown /> : '>'}
                  </span>
                  {expandedFAQ === index && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </li>
                <div className="faq-line"></div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
