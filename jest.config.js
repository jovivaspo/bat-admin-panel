export default {
  automock: false,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js', '@testing-library/react/dont-cleanup-after-each'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg'
  },
  transformIgnorePatterns: [],
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'

  }
}
