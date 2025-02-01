import React from 'react';
import '../styles/loading-skeleton.scss'; // Styling for shimmer effect

/**
 * Props for the LoadingSkeleton component.
 *
 * @interface LoadingSkeletonProps
 * @property {string} [height] - The height of the skeleton loader (default is '50px').
 * @property {string} [width] - The width of the skeleton loader (default is '100%').
 */

/**
 * A simple skeleton loader component that can be used to display a shimmer effect
 * while content is loading. It allows customization of the loader's height and width.
 *
 * @component
 * @param {LoadingSkeletonProps} props - The props for the component.
 * @returns {React.FC} - The LoadingSkeleton component.
 */
const LoadingSkeleton: React.FC<{ height?: string; width?: string }> = ({
  height = '50px',
  width = '100%',
}) => {
  return (
    <div
      data-testid="loading-skeleton"
      className="skeleton"
      style={{ height, width }}
    ></div>
  );
};

export default LoadingSkeleton;
