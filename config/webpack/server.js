const merge = require('webpack-merge');
const sharedConfig = require('./shared');
const { join } = require('path')
const { sync } = require('glob')
const { output, loadersDir } = require('./configuration.js')

module.exports = merge(sharedConfig.config, {
  entry: './app/javascript/packs/application.js',

  output: {
    filename: 'server.js',
    path: output.path,
    libraryTarget: 'commonjs',
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  }
});
