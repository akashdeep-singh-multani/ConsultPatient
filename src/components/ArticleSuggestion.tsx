import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/article-suggestion.scss';
import { ArticlesSuggestionData } from '../interfaces/ArticlesSuggestionData';

interface ArticleSuggestionProps {
  articlesSuggestionData: ArticlesSuggestionData[];
}

const ArticleSuggestion: React.FC<ArticleSuggestionProps> = ({
  articlesSuggestionData,
}) => {
  return (
    <div className="article-suggestion">
      <h2 className="article-suggestion-title">
        Articles that may be of interest
      </h2>
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
                  <i className="fas fa-arrow-right"></i>{' '}
                  {/* Font Awesome icon */}
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
