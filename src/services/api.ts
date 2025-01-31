import { DashboardData } from '../interfaces/DashboardData';
import mockData from './mockData.json';

/**
 * Fetches dashboard data asynchronously with a simulated network delay.
 * This function simulates fetching data from an API by using a timeout
 * to return mock data after a delay.
 *
 * @async
 * @function fetchDashboardData
 * @returns {Promise<DashboardData>} - A promise that resolves with the dashboard data.
 */
export const fetchDashboardData = async (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simulate network delay
  });
};
