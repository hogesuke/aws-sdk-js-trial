const path = require('path');
const glob = require('glob');

// 参考: https://sota1235.hatenablog.com/entry/2016/11/09/131109
const jsBasePath = path.resolve(__dirname, 'src/');
const targets = glob.sync(`${jsBasePath}/*.js`);
const entries = {};

targets.forEach(value => {
  const re = new RegExp(`${jsBasePath}/`);
  const key = value.replace(re, '');
  entries[key] = value;
});

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js']
  },
  devtool: '#source-map',
  entry: entries,
  output: {
    path: path.resolve(__dirname, './www/js/'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  performance: { hints: false }
};
