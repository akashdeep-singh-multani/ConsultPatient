// fetchDashboardData.test.ts
import { fetchDashboardData } from './api';
import mockData from './mockData.json';

jest.mock('./mockData.json', () => ({
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

  it('should handle rejection or failure gracefully (error handling)', async () => {
    // Optionally, you can simulate failure scenarios if your service has error handling
    // For example, you can introduce a failure case in the service to simulate errors.
    // In the current case, this is not strictly necessary, but we could test error handling here if added.
    // Example:
    // jest.spyOn(global, 'setTimeout').mockImplementationOnce((fn, delay) => fn()); // Mock timeout to fail fast
    // Example failure case
    // await expect(fetchDashboardData()).rejects.toThrow("Error occurred");
  });
});
