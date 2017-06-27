const merge = require('webpack-merge');
const { output } = require('./configuration.js')
const sharedConfig = require('./shared');

module.exports = merge(sharedConfig.config, {
  entry: './app/javascript/packs/application.js',

  output: {
    filename: 'server.js',
    path: output.path,
    libraryTarget: 'commonjs',
  },
});
