import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../styles/about-medication-card.scss';

interface AboutMedicationCardProps {
  heading: string;
  description: string;
  videoUrl?: string; // Optional video URL
}

const AboutMedicationCard: React.FC<AboutMedicationCardProps> = ({
  heading,
  description,
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Card className="about-medication-card">
      {/* Video Section */}
      {videoUrl && (
        <div className="video-container">
          <video
            src={videoUrl}
            controls={isPlaying} // Show controls only when playing
            muted // Mute the video (optional)
            loop // Loop the video (optional)
            preload="metadata" // Load only metadata for performance
            poster="/path/to/poster-image.jpg" // Optional: Add a poster image for the first frame
            className="about-medication-video"
            onClick={handlePlayClick} // Play video on click
          />
          {!isPlaying && (
            <button className="play-button" onClick={handlePlayClick}>
              <i className="fas fa-play"></i> {/* Font Awesome play icon */}
            </button>
          )}
        </div>
      )}

      {/* Content Section */}
      <Card.Body>
        <h2 className="about-medication-heading">{heading}</h2>
        <p className="about-medication-description">{description}</p>
      </Card.Body>
    </Card>
  );
};

export default AboutMedicationCard;
