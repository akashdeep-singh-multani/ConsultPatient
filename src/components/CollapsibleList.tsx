import React, { useState, useCallback } from 'react';
import { MdArrowDropDown } from 'react-icons/md'; // You can import this directly since it's no longer lazily loaded here
import '../styles/collapsible-list.scss';
import { CollapsibleListProps } from '../interfaces/CollapsibleListProps';

const CollapsibleList: React.FC<CollapsibleListProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="collapsible-list">
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <li
              className="collapsible-item"
              onClick={() => handleToggle(index)}
            >
              <span>{item.question}</span>
              <span className="collapsible-arrow">
                {expandedIndex === index ? <MdArrowDropDown /> : '>'}
              </span>
              {expandedIndex === index && (
                <p className="collapsible-content">{item.answer}</p>
              )}
            </li>
            <div className="collapsible-line"></div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CollapsibleList;
