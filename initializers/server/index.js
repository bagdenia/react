/* eslint-disable */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 5000;

new webpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  }
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at ${host}:${port}`);
  }
});
