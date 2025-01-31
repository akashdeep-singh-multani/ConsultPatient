import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/article-suggestion.scss';
import { ArticlesSuggestionData } from '../interfaces/ArticlesSuggestionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Props for the ArticleSuggestion component.
 *
 * @interface ArticleSuggestionProps
 * @property {ArticlesSuggestionData[]} articlesSuggestionData - Array of articles with data to be displayed in the suggestion list.
 */
interface ArticleSuggestionProps {
  articlesSuggestionData: ArticlesSuggestionData[];
}

/**
 * A component that displays a list of article suggestions, with images and titles.
 * Each article includes a button with an arrow icon.
 * @param {ArticleSuggestionProps} props - The props for the component.
 * @returns {React.FC} - The ArticleSuggestion component.
 */
const ArticleSuggestion: React.FC<ArticleSuggestionProps> = ({
  articlesSuggestionData,
}) => {
  return (
    <div className="article-suggestion">
      <h2 className="sub-heading">Articles that may be of interest</h2>
      <div className="article-suggestion-grid">
        {articlesSuggestionData.map((article, index) => (
          <Card key={index} className="article-card">
            {article.imageUrl && (
              <Card.Img
                variant="top"
                src={article.imageUrl}
                alt={article.title}
              />
            )}
            <Card.Body>
              <div className="title-icon-container">
                <Card.Title>{article.title}</Card.Title>
                <button className="circle-icon-button">
                  <FontAwesomeIcon icon={faArrowRight} />{' '}
                  {/* Right arrow icon */}
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticleSuggestion;
