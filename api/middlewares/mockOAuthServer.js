const mockOAuthServer = require('./../oauth/mockServer');
const mockData = {
  client: {
    id : 'oauth2_application_client_id',
    secret : 'oauth2_application_secret',
    redirectUris : ['http://localhost:5000/oauth2/redirect/callback'],
    // grants: ['authorization_code']
    grants: ['password']
  },
  user: {
    id: '123',
    		username: 'pedroetb',
    		password: 'password'
  },
  jwtSecret: 'jwt_secret_key'
};

module.exports = mockOAuthServer(mockData)
