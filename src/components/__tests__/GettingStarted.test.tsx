import { render, screen } from '@testing-library/react';
import GettingStartedCard from '../GettingStartedCard';
import { GettingStartedData } from '../../interfaces/GettingStartedData';

// Mock Data for testing
const mockGettingStartedData: GettingStartedData = {
  heading: 'Getting Started with Your Medication',
  description: 'Here’s a guide to help you get started with your medication.',
  medicationInfo: {
    heading: 'Medication Overview',
    body_heading: 'Medication Benefits',
    description: 'This medication helps manage your condition effectively.',
    videoUrl: 'https://www.example.com/video.mp4',
  },
  articlesSuggestionData: [
    {
      title: 'How to stay in control',
      imageUrl:
        'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
    },
    {
      title: 'Why Hydration is important',
      imageUrl:
        'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
    },
    {
      title: 'Avoiding the challenges',
      imageUrl:
        'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
    },
    {
      title: 'New Year Reflections',
      imageUrl:
        'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
    },
  ],
};

describe('GettingStartedCard Component', () => {
  test('renders the correct heading and description', () => {
    render(<GettingStartedCard gettingStartedData={mockGettingStartedData} />);

    // Verify if the heading and description are rendered correctly
    expect(
      screen.getByText('Getting Started with Your Medication'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Here’s a guide to help you get started with your medication.',
      ),
    ).toBeInTheDocument();
  });

  test('renders the AboutMedicationCard with correct information', () => {
    render(<GettingStartedCard gettingStartedData={mockGettingStartedData} />);

    // Verify that the AboutMedicationCard is rendered with correct medication info
    expect(screen.getByText('Medication Overview')).toBeInTheDocument();
    expect(screen.getByText('Medication Benefits')).toBeInTheDocument();
    expect(
      screen.getByText(
        'This medication helps manage your condition effectively.',
      ),
    ).toBeInTheDocument();
  });

  test('renders the correct number of article suggestions', () => {
    render(<GettingStartedCard gettingStartedData={mockGettingStartedData} />);

    // Verify that the correct number of articles are rendered
    const articleTitles = screen.getAllByText(
      /Understanding Your Medication|How to Use Medication Safely/,
    );
    expect(articleTitles).toHaveLength(
      mockGettingStartedData.articlesSuggestionData.length,
    );
  });

  test('renders the article title and description correctly', () => {
    render(<GettingStartedCard gettingStartedData={mockGettingStartedData} />);

    // Verify that each article title and description is rendered correctly
    expect(
      screen.getByText('Understanding Your Medication'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('How to Use Medication Safely'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Learn how to manage your medication effectively.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Tips for using medication safely and effectively.'),
    ).toBeInTheDocument();
  });

  test('does not display articles when no article data is provided', () => {
    render(
      <GettingStartedCard
        gettingStartedData={{
          ...mockGettingStartedData,
          articlesSuggestionData: [],
        }}
      />,
    );

    // Verify that no articles are displayed when articlesSuggestionData is empty
    expect(
      screen.queryByText(
        /Understanding Your Medication|How to Use Medication Safely/,
      ),
    ).toBeNull();
  });

  test('renders a video link in AboutMedicationCard if videoUrl exists', () => {
    render(<GettingStartedCard gettingStartedData={mockGettingStartedData} />);

    // Verify if the video link is rendered in the AboutMedicationCard
    expect(screen.getByText('Medication Overview')).toBeInTheDocument();
    const videoElement = screen.getByRole('video');
    expect(videoElement).toHaveAttribute(
      'src',
      'https://www.example.com/video.mp4',
    );
  });
});
