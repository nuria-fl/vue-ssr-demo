const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const express = require('express')
const server = express()

const vm = new Vue({
  data: {
    msg: 'Hello world'
  },
  render (h) {
    return h('div', this.msg)
  }
})

server.get('/', (req, res) => {
  renderer.renderToString(vm, (err, html) => {
    res.send(html)
  })
})

server.listen(3000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:3000')
})
