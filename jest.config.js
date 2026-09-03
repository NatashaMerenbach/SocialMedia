module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@fortawesome/react-native-fontawesome|react-native-svg)/)',
  ],
};
