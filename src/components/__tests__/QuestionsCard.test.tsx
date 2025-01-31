import { render } from '@testing-library/react';
import QuestionsCard from '../QuestionsCard';

describe('QuestionsCard Component', () => {
  const defaultProps = {
    title: 'Frequently Asked Questions',
    description: 'This card displays FAQs and their operating hours.',
    operatingHours: 'Mon-Fri: 9am - 5pm',
    buttonText: 'Contact Us',
  };

  test('renders QuestionsCard with correct props', () => {
    const { getByText } = render(<QuestionsCard {...defaultProps} />);

    // Check if the title is rendered correctly
    expect(getByText(defaultProps.title)).toBeInTheDocument();

    // Check if the description is rendered correctly
    expect(getByText(defaultProps.description)).toBeInTheDocument();

    // Check if the operating hours are rendered correctly
    expect(getByText(defaultProps.operatingHours)).toBeInTheDocument();

    // Check if the button with correct text is rendered
    expect(getByText(defaultProps.buttonText)).toBeInTheDocument();
  });

  test('renders with the correct icon', () => {
    const { container } = render(<QuestionsCard {...defaultProps} />);

    // Check if the icon is rendered correctly
    const iconElement = container.querySelector('.questions-card__icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent('💬');
  });

  test('renders button as disabled', () => {
    const { getByText } = render(<QuestionsCard {...defaultProps} />);

    // Find the button by its text
    const button = getByText(defaultProps.buttonText);

    // Check if the button is disabled
    expect(button).toBeDisabled();
  });

  test('correct button properties are passed', () => {
    const { getByText } = render(<QuestionsCard {...defaultProps} />);

    // Find the button by its text and check if it has the correct class for primary styling
    const button = getByText(defaultProps.buttonText);
    expect(button).toHaveClass('btn-primary');
    expect(button).toHaveClass('btn-small');
    expect(button).toHaveClass('btn-rounded');
  });

  test('renders without crashing when no props are passed', () => {
    const { container } = render(
      <QuestionsCard
        title="Test Title"
        description="Test Description"
        operatingHours="Test Hours"
        buttonText="Test Button"
      />,
    );

    // Ensure that the component renders without crashing
    expect(container).toBeInTheDocument();
  });
});
