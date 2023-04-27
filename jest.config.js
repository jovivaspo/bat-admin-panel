export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js', '@testing-library/react/dont-cleanup-after-each'],
  transformIgnorePatterns: [],
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js'

  }
}
