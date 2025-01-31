import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../styles/about-medication-card.scss';
import { VIDEO_POSTER_URL } from '../constants/constants';

interface AboutMedicationCardProps {
  heading: string;
  body_heading: string;
  description: string;
  videoUrl?: string; // Optional video URL
}

const AboutMedicationCard: React.FC<AboutMedicationCardProps> = ({
  heading,
  body_heading,
  description,
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="about-medication-container">
      <h2 className="sub-heading">{heading}</h2>
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
              poster={VIDEO_POSTER_URL} // Optional: Add a poster image for the first frame
              className="about-medication-video"
              onClick={handlePlayClick} // Play video on click
            />
            {!isPlaying && (
              <button className="play-button" onClick={handlePlayClick}>
                <FontAwesomeIcon icon={faPlay} /> {/* Font Awesome play icon */}
              </button>
            )}
          </div>
        )}

        {/* Content Section */}
        <Card.Body>
          <div className="flex-column">
            <h2 className="card-body-heading">{body_heading}</h2>
            <p className="card-body-description">{description}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMedicationCard;
