import { render, screen, waitFor, act } from '@testing-library/react';
import Dashboard from './Dashboard';
import React from 'react';
import '@testing-library/jest-dom';
import { fetchDashboardData } from '../services/api';

// Mock the API function and explicitly type the mock
jest.mock('../services/api', () => ({
  fetchDashboardData: jest.fn() as jest.MockedFunction<
    typeof fetchDashboardData
  >,
}));

describe('Dashboard Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders loading skeleton initially', async () => {
    // Mock the API to return a promise that never resolves (simulates loading)
    (fetchDashboardData as jest.Mock).mockImplementation(
      () => new Promise(() => {}),
    );

    await act(async () => {
      render(<Dashboard />);
    });

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  test('handles API error gracefully', async () => {
    // Mock the API to throw an error
    (fetchDashboardData as jest.Mock).mockRejectedValue(new Error('API Error'));

    await act(async () => {
      render(<Dashboard />);
    });

    // Verify that the loading skeleton is shown initially
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();

    // Wait for the error to be handled
    await waitFor(() => {
      expect(screen.queryByText('Welcome Claire')).not.toBeInTheDocument();
    });
  });
});
