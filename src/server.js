/* eslint no-console: 0 */
import path from 'path';
import express from 'express';

const app = express();

app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

// Dev middleware for hot reloading and automatic webpack recompilation
if (process.env.NODE_ENV === 'development') {
  require('../webpack/devMiddleware')(app);
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
}

if (process.env.NODE_ENV === 'production') {
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
}

app.listen(3000, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('App running on port 3000');
  }
});
