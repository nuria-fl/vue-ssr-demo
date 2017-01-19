const fs = require('fs')
const path = require('path')
const express = require('express')
const vueServerRenderer = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file)
const serialize = require('serialize-javascript')
const app = express()
const PORT = 3000

// Server-Side Bundle File
const serverBundle = fs.readFileSync(path.join(__dirname, './dist/bundle.server.js'), 'utf8')
const renderer = vueServerRenderer.createBundleRenderer(serverBundle)

// Read the index file
const indexFile = fs.readFileSync(resolve('./index.html'), 'utf-8')

function parseIndex (template) {
  const contentMarker = '<!-- APP -->'
  const i = template.indexOf(contentMarker)
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length)
  }
}

const indexHTML = parseIndex(indexFile)

// Serve static folder
const serve = (path) => express.static(resolve(path))
app.use('/dist', serve('./dist'))

// Serve the app
app.get('*', (req, res) => {

  res.setHeader("Content-Type", "text/html")

  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)

  renderStream.once('data', () => {
    res.write(indexHTML.head)
  })

  renderStream.on('data', chunk => {
    res.write(chunk)
  })

  renderStream.on('end', () => {
    // embed initial store state
    if (context.initialState) {
      res.write(
        `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      )
    }
    res.end(indexHTML.tail)
  })

  renderStream.on('error', err => {
    if (err && err.code === '404') {
      res.status(404).end('404 | Page Not Found')
      return
    }
    // Render Error Page or Redirect
    res.status(500).end('Internal Error 500')
    console.error(`error during render : ${req.url}`)
    console.error(err)
  })
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
