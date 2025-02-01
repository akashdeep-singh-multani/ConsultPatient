// fetchDashboardData.test.ts
import { fetchDashboardData } from './api';
import mockData from './mockData';

jest.mock('./mockData', () => ({
  someKey: 'mockDataValue', // mock the contents of your mockData.json here
}));

describe('fetchDashboardData', () => {
  it('should fetch the dashboard data after the simulated delay', async () => {
    // Call the function to fetch data
    const data = await fetchDashboardData();

    // Assert that the resolved data is equal to the mock data
    expect(data).toEqual(mockData);
  });

  it('should resolve within a reasonable timeout', async () => {
    const timeout = 1500; // Timeout should be a bit longer than the simulated delay in the service
    const promise = fetchDashboardData();

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), timeout);
    });

    // Wait for either promise to resolve or reject
    await expect(
      Promise.race([promise, timeoutPromise]),
    ).resolves.toBeDefined();
  });
});
