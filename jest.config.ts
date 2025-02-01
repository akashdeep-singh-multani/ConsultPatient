export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/__mocks__/styleMock.js', // Mock SCSS files
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json', // Use the Jest-specific tsconfig
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: For global setup
};
