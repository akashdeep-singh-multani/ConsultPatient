import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../pages/Dashboard';
import { fetchDashboardData } from '../services/api';
import { DashboardData } from '../interfaces/DashboardData';
import { Tile } from '../interfaces/Tile'; // Assuming the Tile interface is being imported
import { TabsComponentProps } from '../interfaces/TabsComponentProps';
import { DashCardProps } from '../interfaces/DashCardProps';
import { GettingStartedData } from '../interfaces/GettingStartedData';

// Mock API call
jest.mock('../services/api', () => ({
  fetchDashboardData: jest.fn(),
}));

// Mock Lazy-loaded components
jest.mock('../components/Header', () => () => (
  <div data-testid="header">Header</div>
));
jest.mock(
  '../components/TabsComponent',
  () => (props: { tabsData: TabsComponentProps }) => (
    <div data-testid="tabs">{JSON.stringify(props.tabsData)}</div>
  ),
);
jest.mock(
  '../components/TileTabsBootstrapComponent',
  () =>
    (props: {
      dashData: DashCardProps;
      gettingStartedData: GettingStartedData;
    }) => <div data-testid="tile-tabs">{JSON.stringify(props.dashData)}</div>,
);

// Mock Constants
jest.mock('../constants/constants', () => ({
  HEADING_NURSE: 'Nurse Dashboard',
  HEADING_DESC_NURSE: 'Welcome to the nurse dashboard.',
  TABS_DATA: [{ id: 1, title: 'Tab 1' }],
}));

describe('Dashboard Component', () => {
  const mockData: DashboardData = {
    userName: 'Claire',
    tiles: [
      {
        id: 1,
        title: 'Nurse Dashboard',
        content: 'Lorem ipsum dolor sit amet...',
      },
      {
        id: 2,
        title: 'Getting Started',
        content: 'Ut enim ad minim veniam...',
      },
    ] as Tile[], // Strictly typing tiles as Tile[]
    dashData: {
      heading: 'Welcome Claire',
      description: 'Lorem ipsum dolor sit amet...',
      services: [
        {
          id: 1,
          title: 'Request a Consult',
          content: 'Request a consult with one of our qualified nurses...',
          buttonLabel: 'Request now',
        },
      ],
      questionCardData: {
        description: 'Ask an expert about your treatment',
        operatingHours: 'Operating hours: 9am - 5:30pm AET',
        buttonLabel: 'Chat with us',
      },
    },
    gettingStartedData: {
      heading: 'Help getting started',
      description: 'Lorem ipsum dolor sit amet...',
      medicationInfo: {
        heading: 'About your medication',
        body_heading: 'Learn about your medication',
        description: 'Lorem ipsum dolor sit amet...',
        videoUrl:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      articlesSuggestionData: [
        {
          title: 'How to stay in control',
          imageUrl: 'https://fastly.picsum.photos/id/12/2500/1667.jpg',
        },
      ],
    },
  };

  beforeEach(() => {
    (fetchDashboardData as jest.Mock).mockResolvedValue(mockData);
  });

  test('renders loading skeleton initially', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  test('renders dashboard content after data loads', async () => {
    render(<Dashboard />);

    // Wait for data to load
    await waitFor(() =>
      expect(screen.getByTestId('header')).toBeInTheDocument(),
    );

    expect(screen.getByText('Nurse Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Welcome Claire')).toBeInTheDocument();
    expect(screen.getByTestId('tabs')).toHaveTextContent('Tab 1');
    expect(screen.getByTestId('tile-tabs')).toHaveTextContent('Welcome Claire');
  });

  test('handles API error gracefully', async () => {
    (fetchDashboardData as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<Dashboard />);

    await waitFor(() =>
      expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument(),
    );

    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
    expect(screen.queryByTestId('tabs')).not.toBeInTheDocument();
    expect(screen.queryByTestId('tile-tabs')).not.toBeInTheDocument();
  });
});
