import { render } from '@testing-library/react';
import LoadingSkeleton from '../LoadingSkeleton';

describe('LoadingSkeleton Component', () => {
  test('renders with default height and width', () => {
    render(<LoadingSkeleton />);

    const skeletonElement = document.querySelector('.skeleton');

    // Check if the skeleton element is rendered
    expect(skeletonElement).toBeInTheDocument();

    // Verify the default height and width
    expect(skeletonElement).toHaveStyle('height: 50px');
    expect(skeletonElement).toHaveStyle('width: 100%');
  });

  test('renders with custom height and width', () => {
    const customHeight = '100px';
    const customWidth = '200px';

    render(<LoadingSkeleton height={customHeight} width={customWidth} />);

    const skeletonElement = document.querySelector('.skeleton');

    // Check if the skeleton element is rendered
    expect(skeletonElement).toBeInTheDocument();

    // Verify the custom height and width
    expect(skeletonElement).toHaveStyle(`height: ${customHeight}`);
    expect(skeletonElement).toHaveStyle(`width: ${customWidth}`);
  });

  test('applies default height when no height is passed', () => {
    render(<LoadingSkeleton width="100px" />);

    const skeletonElement = document.querySelector('.skeleton');

    // Check if the skeleton element is rendered with the default height
    expect(skeletonElement).toHaveStyle('height: 50px');
  });

  test('applies default width when no width is passed', () => {
    render(<LoadingSkeleton height="60px" />);

    const skeletonElement = document.querySelector('.skeleton');

    // Check if the skeleton element is rendered with the default width
    expect(skeletonElement).toHaveStyle('width: 100%');
  });
});
