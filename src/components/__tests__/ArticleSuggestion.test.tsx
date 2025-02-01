import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleSuggestion from '../ArticleSuggestion';
import { ArticlesSuggestionData } from '../../interfaces/ArticlesSuggestionData';
import React from 'react';

describe('ArticleSuggestion', () => {
  const mockArticlesData: ArticlesSuggestionData[] = [
    {
      title: 'How to stay in control',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      title: 'Why Hydration is Important',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      title: 'Avoiding the Challenges',
      imageUrl: '',
    },
  ];

  test('renders article titles correctly', () => {
    render(<ArticleSuggestion articlesSuggestionData={mockArticlesData} />);

    // Check if the titles of the articles are displayed correctly
    mockArticlesData.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });

  test('renders article images when available', () => {
    render(<ArticleSuggestion articlesSuggestionData={mockArticlesData} />);

    // Check if the images are rendered for articles with imageUrl
    mockArticlesData.forEach((article, index) => {
      if (article.imageUrl) {
        const img = screen.getAllByRole('img')[index];
        expect(img).toHaveAttribute('src', article.imageUrl);
      }
    });
  });

  test('does not render image for articles without imageUrl', () => {
    render(<ArticleSuggestion articlesSuggestionData={mockArticlesData} />);

    // Check if there is no image for the article without an imageUrl
    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(
      mockArticlesData.filter((article) => article.imageUrl).length,
    );
  });

  test('renders the arrow button for each article', () => {
    render(<ArticleSuggestion articlesSuggestionData={mockArticlesData} />);

    // Check if each article has an arrow button
    const arrowButtons = screen.getAllByRole('button');
    expect(arrowButtons).toHaveLength(mockArticlesData.length);
  });

  test('checks the button icon is the right arrow', () => {
    render(<ArticleSuggestion articlesSuggestionData={mockArticlesData} />);

    // Check if the button has the correct FontAwesome icon
    const arrowButtons = screen.getAllByRole('button');
    arrowButtons.forEach((button) => {
      expect(button).toContainHTML('<svg');
    });
  });
});
