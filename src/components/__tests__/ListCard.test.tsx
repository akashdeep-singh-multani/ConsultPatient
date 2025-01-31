import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../ListCard';
import { FAQ_LIST } from '../../constants/constants';

describe('Card Component', () => {
  test('renders Card with title and description', () => {
    const title = 'Card Title';
    const description = 'This is the description of the card.';

    render(<Card title={title} description={description} />);

    // Check if the title and description are rendered correctly
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('renders "Read more" button when buttonLabel is provided', () => {
    const title = 'Card Title';
    const description = 'This is the description of the card.';
    const buttonLabel = 'Read more';

    render(
      <Card
        title={title}
        description={description}
        buttonLabel={buttonLabel}
      />,
    );

    // Check if the "Read more" button is rendered
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });

  test('does not render "Read more" button when buttonLabel is not provided', () => {
    const title = 'Card Title';
    const description = 'This is the description of the card.';

    render(<Card title={title} description={description} />);

    // Check that the "Read more" button is not rendered
    expect(screen.queryByText('Read more')).not.toBeInTheDocument();
  });

  test('renders CollapsibleList with FAQ items', () => {
    const title = 'Card Title';
    const description = 'This is the description of the card.';

    render(<Card title={title} description={description} />);

    // Check if the CollapsibleList is rendered with FAQ items
    FAQ_LIST.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  test('toggles FAQ answers when clicking on a question', () => {
    const title = 'Card Title';
    const description = 'This is the description of the card.';

    render(<Card title={title} description={description} />);

    const firstQuestion = screen.getByText(FAQ_LIST[0].question);

    // Ensure the answer is not visible initially
    expect(screen.queryByText(FAQ_LIST[0].answer)).not.toBeInTheDocument();

    // Simulate click on the first question to toggle answer visibility
    fireEvent.click(firstQuestion);

    // Ensure the answer becomes visible after clicking
    expect(screen.getByText(FAQ_LIST[0].answer)).toBeInTheDocument();
  });
});
