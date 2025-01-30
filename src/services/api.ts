import { DashboardData } from '../interfaces/DashboardData';
import mockData from './mockData.json';

export const fetchDashboardData = async (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simulate network delay
  });
};
