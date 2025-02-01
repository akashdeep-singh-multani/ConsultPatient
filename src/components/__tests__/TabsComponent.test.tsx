import { render, screen, act } from '@testing-library/react';
import TabsComponent from '../TabsComponent';
import React from 'react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { CardProps } from '../../interfaces/CardPops';

// Import the type for the props of ListCard

// Mock the lazy-loaded ListCard component
jest.mock('../ListCard', () => ({
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

  test('displays the correct icon for each tab', async () => {
    await act(async () => {
      render(<TabsComponent tabsData={tabsData} />);
    });

    // Check if the icons are rendered correctly for each tab
    expect(screen.getByText('🌟')).toBeInTheDocument();
    expect(screen.getByText('🔧')).toBeInTheDocument();
  });

  test('renders ListCard correctly after it is loaded', async () => {
    await act(async () => {
      render(<TabsComponent tabsData={tabsData} />);
    });

    // Use `findBy` to wait for the ListCard content to load
    expect(await screen.findByText('Card Title 1')).toBeInTheDocument();
    expect(
      await screen.findByText('Description for Card 1'),
    ).toBeInTheDocument();
    expect(await screen.findByText('Click me 1')).toBeInTheDocument();
  });
});
