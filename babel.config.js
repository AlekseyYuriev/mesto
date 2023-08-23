const presets = [
  [
    '@babel/preset-env', {
      targets: {
        ie: '11',
        chrome: '64',
        edge: '17',
        firefox: '50',
        safari: '11.1'
      },
      useBuiltIns: 'entry'
    }]
];

module.exports = { presets };
