// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db-1.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// 404
server.use('/app/people/:id', require('./middlewares/404-status.js'))

// authorize
server.use('/app/', require('./middlewares/authorize.js'))
server.use('/oauth', require('./middlewares/mockOAuthServer.js'))


// simulate delay response
function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 200;
}
server.use((req, res, next) => {
    	setTimeout(() => next(), getRandomInt(1,10));
});

server.use('/app', router)
	
server.listen(3000, () => {
  console.log('JSON Server is running')
  console.log('OAuth Server is running')
})
