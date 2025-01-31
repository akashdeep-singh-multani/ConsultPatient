// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMedicationCard from '../AboutMedicationCard';
import { VIDEO_POSTER_URL } from '../../constants/constants';
// Mocking the constants and any necessary external assets
jest.mock('../constants/constants', () => ({
  VIDEO_POSTER_URL: 'https://example.com/poster.jpg',
}));

describe('AboutMedicationCard', () => {
  const defaultProps = {
    heading: 'About Your Medication',
    body_heading: 'Learn More About Your Treatment',
    description: 'This is a description about your medication.',
  };

  test('renders AboutMedicationCard without video URL', () => {
    render(<AboutMedicationCard {...defaultProps} />);

    // Verify that the static text content is rendered
    expect(screen.getByText('About Your Medication')).toBeInTheDocument();
    expect(
      screen.getByText('Learn More About Your Treatment'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('This is a description about your medication.'),
    ).toBeInTheDocument();

    // Verify that no video section is rendered (since no videoUrl is passed)
    expect(screen.queryByTestId('video-container')).not.toBeInTheDocument();
    expect(screen.queryByTestId('play-button')).not.toBeInTheDocument();
  });

  test('renders AboutMedicationCard with video URL', () => {
    const propsWithVideo = {
      ...defaultProps,
      videoUrl: 'https://example.com/video.mp4',
    };

    render(<AboutMedicationCard {...propsWithVideo} />);

    // Verify that the static text content is rendered
    expect(screen.getByText('About Your Medication')).toBeInTheDocument();
    expect(
      screen.getByText('Learn More About Your Treatment'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('This is a description about your medication.'),
    ).toBeInTheDocument();

    // Verify that the video section is rendered
    const videoContainer = screen.getByTestId('video-container');
    expect(videoContainer).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument(); // FontAwesome icon button should be rendered
  });

  test('clicking the play button starts the video and shows controls', () => {
    const propsWithVideo = {
      ...defaultProps,
      videoUrl: 'https://example.com/video.mp4',
    };

    render(<AboutMedicationCard {...propsWithVideo} />);

    const playButton = screen.getByText('Play'); // FontAwesome icon
    expect(playButton).toBeInTheDocument();

    // Simulate clicking the play button
    fireEvent.click(playButton);

    // Check if video controls are displayed (after clicking play)
    const videoElement = screen.getByRole('video');
    expect(videoElement).toHaveAttribute('controls', 'true');
  });

  test('renders video poster image when video URL is provided', () => {
    const propsWithVideo = {
      ...defaultProps,
      videoUrl: 'https://example.com/video.mp4',
    };

    render(<AboutMedicationCard {...propsWithVideo} />);

    const videoElement = screen.getByRole('video');
    expect(videoElement).toHaveAttribute('poster', VIDEO_POSTER_URL);
  });

  test('video controls are initially hidden before play', () => {
    const propsWithVideo = {
      ...defaultProps,
      videoUrl: 'https://example.com/video.mp4',
    };

    render(<AboutMedicationCard {...propsWithVideo} />);

    const videoElement = screen.getByRole('video');
    expect(videoElement).not.toHaveAttribute('controls'); // Controls are hidden initially
  });
});
