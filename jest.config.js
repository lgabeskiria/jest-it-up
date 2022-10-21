module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['lib/*.js'],
  coverageReporters: [
    'json-summary',
    'lcovonly',
    ['text', { skipFull: true }],
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testEnvironment: 'node',
}
