/*
  We don't need this server.js in this project, it copied from the original fantasy-workout project
*/
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => { console.log(`App is listening on port ${port}`) });

if (process.env.NODE_ENV === 'development') {
  let compiler = webpack(webpackConfig);

  app.use(require('webpack-hot-middleware')(compiler));

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));
}

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/api/*', (req, res) => {
  res.send('This is for api route');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});