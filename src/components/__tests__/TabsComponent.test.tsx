import { render, screen, fireEvent } from '@testing-library/react';
import TabsComponent from '../TabsComponent';
import { CardProps } from '../../interfaces/CardPops';

// Mock the lazy-loaded ListCard component
jest.mock('./ListCard', () => ({
  __esModule: true,
  default: ({ title, description, buttonLabel }: CardProps) => (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonLabel}</button>
    </div>
  ),
}));

describe('TabsComponent', () => {
  const tabsData = [
    {
      eventKey: 'tab1',
      label: 'Tab 1',
      icon: () => <span>🌟</span>,
      cardTitle: 'Card Title 1',
      cardDescription: 'Description for Card 1',
      buttonLabel: 'Click me 1',
    },
    {
      eventKey: 'tab2',
      label: 'Tab 2',
      icon: () => <span>🔧</span>,
      cardTitle: 'Card Title 2',
      cardDescription: 'Description for Card 2',
      buttonLabel: 'Click me 2',
    },
  ];

  test('renders tabs correctly with default active tab', () => {
    render(<TabsComponent tabsData={tabsData} />);

    // Check if the tab navigation links are rendered
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();

    // Verify that the content of the first tab is displayed by default
    expect(screen.getByText('Card Title 1')).toBeInTheDocument();
    expect(screen.getByText('Description for Card 1')).toBeInTheDocument();
    expect(screen.getByText('Click me 1')).toBeInTheDocument();
  });

  test('switches tabs and renders corresponding content', () => {
    render(<TabsComponent tabsData={tabsData} />);

    // Click on the second tab
    fireEvent.click(screen.getByText('Tab 2'));

    // Check that the content of the second tab is displayed
    expect(screen.getByText('Card Title 2')).toBeInTheDocument();
    expect(screen.getByText('Description for Card 2')).toBeInTheDocument();
    expect(screen.getByText('Click me 2')).toBeInTheDocument();

    // Check that the content of the first tab is no longer displayed
    expect(screen.queryByText('Card Title 1')).not.toBeInTheDocument();
    expect(
      screen.queryByText('Description for Card 1'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Click me 1')).not.toBeInTheDocument();
  });

  test('displays the correct icon for each tab', () => {
    render(<TabsComponent tabsData={tabsData} />);

    // Check if the icons are rendered correctly for each tab
    expect(screen.getByText('🌟')).toBeInTheDocument();
    expect(screen.getByText('🔧')).toBeInTheDocument();
  });

  test('renders fallback while loading ListCard component', () => {
    render(<TabsComponent tabsData={tabsData} />);

    // Check if fallback content "Loading..." is displayed during lazy loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders ListCard correctly after it is loaded', async () => {
    render(<TabsComponent tabsData={tabsData} />);

    // Check if the ListCard content is displayed after loading
    expect(await screen.findByText('Card Title 1')).toBeInTheDocument();
    expect(
      await screen.findByText('Description for Card 1'),
    ).toBeInTheDocument();
    expect(await screen.findByText('Click me 1')).toBeInTheDocument();
  });
});
