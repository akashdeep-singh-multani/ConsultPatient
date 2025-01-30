// components/LoadingSkeleton.tsx

import React from 'react';
import '../styles/loading-skeleton.scss'; // Styling for shimmer effect

const LoadingSkeleton: React.FC<{ height?: string; width?: string }> = ({
  height = '50px',
  width = '100%',
}) => {
  return <div className="skeleton" style={{ height, width }}></div>;
};

export default LoadingSkeleton;
