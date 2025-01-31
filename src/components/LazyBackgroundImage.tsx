import React, { useEffect, useState } from 'react';

interface LazyBackgroundImageProps {
  src: string; // `src` should be a string (URL of the image)
  alt: string; // `alt` should be a string (alternative text for accessibility)
}

const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  src,
  alt,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error('Error loading the image');
      setImageLoaded(true); // You could also set a fallback image or state
    };
  }, [src]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        right: '80px',
        width: '630.61px',
        height: '416.69px',
        zIndex: -1,
        backgroundImage: imageLoaded ? `url(${src})` : 'none',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '0',
        borderRadius: '0',
        boxShadow: 'none',
      }}
      role="img"
      aria-label={alt} // Use `alt` for accessibility
    >
      {!imageLoaded && <div>Loading...</div>}
    </div>
  );
};

export default LazyBackgroundImage;
