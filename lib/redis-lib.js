const redisServer = require('redis-server')
const redisClient = require('redis')

module.exports.startServer = function() {
  return new Promise((resolve, reject) => {
    const server = new redisServer(6379)
    server.open((err) => {
      if (err) return reject(err)
      resolve(server)
    })
  })
}

module.exports.startClient = function() {
  return new Promise((resolve, reject) => {
    const client = redisClient.createClient()
    resolve(client)
  })
}
