export default {
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.js'],
  forceExit: true,
  detectOpenHandles: true,
  watchman: false,
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
