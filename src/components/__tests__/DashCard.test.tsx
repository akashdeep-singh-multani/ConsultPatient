import { render, screen } from '@testing-library/react';
import DashCard from '../DashCard';
import { DashCardProps } from '../../interfaces/DashCardProps';
import React from 'react';
import '@testing-library/jest-dom';

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
