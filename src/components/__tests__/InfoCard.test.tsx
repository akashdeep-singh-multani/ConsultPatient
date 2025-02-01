import { render, screen } from '@testing-library/react';
import InfoCard from '../InfoCard';
import React from 'react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe('InfoCard Component', () => {
  test('renders InfoCard with title and content', () => {
    const title = 'Info Card Title';
    const content = 'This is the content of the info card.';

    render(<InfoCard title={title} content={content} />);

    // Check if the title and content are rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  test('renders InfoCard with a link if linkText is provided', () => {
    const title = 'Info Card Title';
    const content = 'This is the content of the info card.';
    const linkText = 'Click here for more';

    render(<InfoCard title={title} content={content} linkText={linkText} />);

    // Check if the link is rendered correctly
    expect(screen.getByText(linkText)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
  });

  test('does not render link when linkText is not provided', () => {
    const title = 'Info Card Title';
    const content = 'This is the content of the info card.';

    render(<InfoCard title={title} content={content} />);

    // Check that the link is not rendered when linkText is not provided
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
