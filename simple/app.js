const express = require('express')
const server = express()

const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

server.get('/', (req, res) => {
  res.send('This is not a Vue app')
})

server.listen(3000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:3000')
})
