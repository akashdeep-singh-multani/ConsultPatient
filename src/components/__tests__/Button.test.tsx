import React from 'react'; // Add this import
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button', () => {
  test('renders button with provided text', () => {
    render(<Button text="Click Me" onClick={jest.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
  });

  test('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button text="Click Me" onClick={onClickMock} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick function when disabled', () => {
    const onClickMock = jest.fn();
    render(<Button text="Click Me" onClick={onClickMock} disabled />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test('applies correct class for variant prop', () => {
    const { rerender } = render(
      <Button text="Primary" onClick={jest.fn()} variant="primary" />,
    );
    let button = screen.getByRole('button');
    expect(button).toHaveClass('primary');

    rerender(
      <Button text="Secondary" onClick={jest.fn()} variant="secondary" />,
    );
    button = screen.getByRole('button');
    expect(button).toHaveClass('secondary');
  });

  test('applies correct class for size prop', () => {
    const { rerender } = render(
      <Button text="Medium" onClick={jest.fn()} size="medium" />,
    );
    let button = screen.getByRole('button');
    expect(button).toHaveClass('medium');

    rerender(<Button text="Small" onClick={jest.fn()} size="small" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('small');

    rerender(<Button text="Large" onClick={jest.fn()} size="large" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('large');
  });

  test('applies rounded class when rounded prop is true', () => {
    render(<Button text="Rounded" onClick={jest.fn()} rounded />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('rounded');
  });

  test('does not apply rounded class when rounded prop is false', () => {
    render(<Button text="Not Rounded" onClick={jest.fn()} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('rounded');
  });

  test('applies disabled attribute when disabled prop is true', () => {
    render(<Button text="Disabled" onClick={jest.fn()} disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('applies default class if no variant, size, or rounded props are provided', () => {
    render(<Button text="Default Button" onClick={jest.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('medium');
    expect(button).not.toHaveClass('rounded');
  });
});
