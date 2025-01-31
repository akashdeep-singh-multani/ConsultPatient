import React, { useState, useCallback } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import '../styles/collapsible-list.scss';
import { CollapsibleListProps } from '../interfaces/CollapsibleListProps';

/**
 * Props for the CollapsibleList component.
 *
 * @interface CollapsibleListProps
 * @property {Array} items - An array of items to display in the list. Each item must have a `question` and an `answer`.
 */

/**
 * A collapsible list that allows users to toggle visibility of answers to questions.
 *
 * @component
 * @param {CollapsibleListProps} props - The props for the component.
 * @returns {React.FC} - The CollapsibleList component.
 */

const CollapsibleList: React.FC<CollapsibleListProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  /**
   * Toggles the visibility of the answer for the clicked item.
   *
   * @param {number} index - The index of the item being toggled.
   */

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
