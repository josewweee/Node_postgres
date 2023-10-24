/**
 * File: server.js
 * Description: file responsible for all configuration and execution of the application.
 */
const app = require('./api/src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App running on port ', port);
});
