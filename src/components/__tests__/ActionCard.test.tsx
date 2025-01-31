import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionCard from '../ActionCard';

describe('ActionCard', () => {
  const mockOnButtonClick = jest.fn();

  const defaultProps = {
    title: 'Test Action Card Title',
    description: 'This is a description for the action card.',
    buttonText: 'Click Me',
    onButtonClick: mockOnButtonClick,
  };

  const primaryButtonVariant = 'primary';
  const secondaryButtonVariant = 'secondary';

  test('renders ActionCard component with correct title and description', () => {
    render(
      <ActionCard {...defaultProps} buttonVariant={primaryButtonVariant} />,
    );

    // Check if the title and description are rendered correctly
    expect(screen.getByText('Test Action Card Title')).toBeInTheDocument();
    expect(
      screen.getByText('This is a description for the action card.'),
    ).toBeInTheDocument();
  });

  test('renders ActionCard button with correct text', () => {
    render(
      <ActionCard {...defaultProps} buttonVariant={primaryButtonVariant} />,
    );

    // Check if the button has the correct text
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  test('triggers onButtonClick when button is clicked', () => {
    render(
      <ActionCard {...defaultProps} buttonVariant={primaryButtonVariant} />,
    );

    // Get the button and simulate a click
    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    // Check if the onButtonClick function is called
    expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
  });

  test('renders the button with default primary variant', () => {
    render(
      <ActionCard {...defaultProps} buttonVariant={primaryButtonVariant} />,
    );

    // Check if the button has the default 'primary' variant
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('btn-primary');
  });

  test('renders the button with custom variant', () => {
    render(
      <ActionCard {...defaultProps} buttonVariant={secondaryButtonVariant} />,
    );

    // Check if the button has the custom 'secondary' variant
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('btn-secondary');
  });
});
