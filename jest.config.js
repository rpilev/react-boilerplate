module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx)$',
  testPathIgnorePatterns: ['./setupEnzyme.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!/node_modules/'],
  moduleFileExtensions: ['js', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
}
