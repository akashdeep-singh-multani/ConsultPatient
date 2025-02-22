import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMedicationCard from '../AboutMedicationCard';
import videoPosterUrl from '../assets/video_bg.png';

// Mocking the constants and any necessary external assets
jest.mock('../../constants/constants', () => ({
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

  test('renders video poster image when video URL is provided', () => {
    const propsWithVideo = {
      ...defaultProps,
      videoUrl: 'https://example.com/video.mp4',
    };

    render(<AboutMedicationCard {...propsWithVideo} />);

    const videoElement = screen.getByTestId('video-element');
    expect(videoElement).toHaveAttribute('poster', videoPosterUrl);
  });

  test('video controls are initially hidden before play', () => {
    const propsWithVideo = {
      ...defaultProps,
      videoUrl: 'https://example.com/video.mp4',
    };

    render(<AboutMedicationCard {...propsWithVideo} />);

    const videoElement = screen.getByTestId('video-element');
    expect(videoElement).not.toHaveAttribute('controls'); // Controls are hidden initially
  });
});
