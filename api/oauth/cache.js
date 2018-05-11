const jwt = require('jsonwebtoken');
const moment = require('moment');
const uuid = require('uuid/v4');
const find = require('lodash/find');
const filter = require('lodash/filter');
const defaultGenerateAccessToken = function(client, user, scope) {
  return jwt.sign(user, 'im_a_secret', { algorithm: 'HS512', jwtid: uuid() });
};
module.exports = function(mockData) {
  let tokens = mockData.tokens || [];
  let authCodes = mockData.authCodes || [];
  return {
    generateAccessToken(client, user, scope) {
      const fn = mockData.generateAccessToken || defaultGenerateAccessToken;
      return fn(client, user, scope);
    },
    getAccessToken(bearerToken) {
      const token = find(tokens, (token) => token.accessToken === bearerToken);
      return token || false;
    },
    getClient(clientId, clientSecret) {
      return mockData.client;
    },
    getUser(username, password) {
	     return mockData.user
    },
    saveToken(token, client, user) {
      const fullToken = {
        accessToken: token.accessToken,
        accessTokenExpiresAt: token.accessTokenExpiresAt,
        refreshToken: token.refreshToken,
        refreshTokenExpiresAt: token.refreshTokenExpiresAt,
        client: { id: client.id },
        user: { id: user.id }
      };
      tokens.push(fullToken);
      return fullToken;
    },
    saveAuthorizationCode(code, client, user) {
      const authCode = {
        authorizationCode: code.authorizationCode,
        expiresAt: code.expiresAt,
        redirectUri: code.redirectUri,
        scope: code.scope,
        client: { id: client.id },
        user: { id: user.id }
      };
      authCodes.push(authCode);
      return authCode;
    },
    getAuthorizationCode(authorizationCode) {
      return find(authCodes, (code) => authorizationCode === code.authorizationCode);
    },
    revokeAuthorizationCode(authorizationCode) {
      authCodes = filter(authCodes, (code) => authorizationCode !== code.authorizationCode);
      return true;
    }
  }
}
