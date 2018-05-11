const mockServer = function(mockData) {
  const ExpressOAuthServer = require('express-oauth-server');
  const express = require('express');
  const bodyParser = require('body-parser');
  const Cache = require('./cache');

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.oauth = new ExpressOAuthServer({
    model: Cache(mockData),
    useErrorHandler: true
  });
  app.get('/authorize',
    app.oauth.authorize({
      authenticateHandler: {
        handle: () => mockData.user
      }
    })
  );

  app.post('/token', app.oauth.token());
  return app
};
module.exports = mockServer;
