import { render, screen, fireEvent } from '@testing-library/react';
import DashCard from '../DashCard';
import { DashCardProps } from '../../interfaces/DashCardProps';

// Mock Data for testing
const mockDashData: DashCardProps = {
  dashData: {
    heading: 'Dashboard Heading',
    description: 'Dashboard Description',
    services: [
      {
        id: 1,
        title: 'Service 1',
        content: 'Service 1 Description',
        buttonLabel: 'Service 1 Button',
      },
      {
        id: 2,
        title: 'Service 2',
        content: 'Service 2 Description',
        buttonLabel: 'Service 2 Button',
      },
    ],
    questionCardData: {
      description: 'Operating hours: 9 AM to 5 PM',
      operatingHours: 'Mon-Fri 9:00 AM - 5:00 PM',
      buttonLabel: 'Contact Us',
    },
  },
};

describe('DashCard Component', () => {
  test('renders the correct heading and description', () => {
    render(<DashCard {...mockDashData} />);

    // Verify if the heading and description are rendered correctly
    expect(screen.getByText('Dashboard Heading')).toBeInTheDocument();
    expect(screen.getByText('Dashboard Description')).toBeInTheDocument();
  });

  test('renders the correct number of service cards', () => {
    render(<DashCard {...mockDashData} />);

    // Verify that the correct number of service cards are rendered
    const serviceCards = screen.getAllByText(/Service \d/); // Matches titles like "Service 1" and "Service 2"
    expect(serviceCards).toHaveLength(mockDashData.dashData.services.length);
  });

  test('renders the questions card correctly', () => {
    render(<DashCard {...mockDashData} />);

    // Verify that the questions card is rendered with correct title and content
    expect(screen.getByText('Questions')).toBeInTheDocument();
    expect(
      screen.getByText(mockDashData.dashData.questionCardData.description),
    ).toBeInTheDocument();
  });

  test('renders the info cards correctly', () => {
    render(<DashCard {...mockDashData} />);

    // Verify if the info cards are rendered
    expect(screen.getByText('Booking Information')).toBeInTheDocument();
    expect(screen.getByText('Reminder')).toBeInTheDocument();
    expect(
      screen.getByText('Operating hours: 9 AM to 5 PM'),
    ).toBeInTheDocument();
  });

  test('displays loading skeleton while loading services', () => {
    render(<DashCard {...mockDashData} />);

    // Check if the loading skeleton is rendered while the service cards are loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('handles service card button click', () => {
    render(<DashCard {...mockDashData} />);

    // Simulate clicking the first service button
    const button = screen.getByText('Service 1 Button');
    fireEvent.click(button);

    // Since it's an alert, we can spy on window.alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Check if the alert is called
    expect(window.alert).toHaveBeenCalledWith('Service 1 Button');
  });

  test('does not display services while data is not available', () => {
    render(
      <DashCard
        dashData={{
          ...mockDashData.dashData,
          services: [],
        }}
      />,
    );

    // Verify that no service cards are rendered when there is no service data
    expect(screen.queryByText(/Service \d/)).toBeNull();
  });
});
