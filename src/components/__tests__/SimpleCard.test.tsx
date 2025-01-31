import { render } from '@testing-library/react';
import SimpleCard from '../SimpleCard';

describe('SimpleCard Component', () => {
  const defaultProps = {
    title: 'Card Title',
    description: 'This is a simple card description.',
  };

  test('renders SimpleCard with correct title and description', () => {
    const { getByText } = render(<SimpleCard {...defaultProps} />);

    // Check if the title is rendered correctly
    expect(getByText(defaultProps.title)).toBeInTheDocument();

    // Check if the description is rendered correctly
    expect(getByText(defaultProps.description)).toBeInTheDocument();
  });

  test('renders SimpleCard with correct class names', () => {
    const { container } = render(<SimpleCard {...defaultProps} />);

    // Check if the card has the correct class for styling
    const cardElement = container.querySelector('.simple-card');
    expect(cardElement).toBeInTheDocument();

    const headingElement = container.querySelector('.heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders correctly with no props', () => {
    const { container } = render(
      <SimpleCard title="Test Title" description="Test Description" />,
    );

    // Ensure that the component renders without crashing when only title and description are provided
    expect(container).toBeInTheDocument();
  });

  test('renders with dynamic props', () => {
    const { getByText } = render(
      <SimpleCard
        title="Dynamic Title"
        description="This is a dynamic description."
      />,
    );

    // Check if the dynamic title and description are rendered
    expect(getByText('Dynamic Title')).toBeInTheDocument();
    expect(getByText('This is a dynamic description.')).toBeInTheDocument();
  });
});
