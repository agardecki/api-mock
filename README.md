# api-mock
install:
npm install

npm start

generate mock data:
json-server generate-2.js

run server:
node server.js

App Endpoints:

/app/people/

/app/people/10

/app/transactions

/app/transactions?peopleId=10

OAuth Endpoint:
/oauth/token
Content-Type:application/x-www-form-urlencoded

grant_type:password
client_id:oauth2_application_client_id
client_secret:oauth2_application_secret
username:brad@email.com
password:123edc