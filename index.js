const express = require('express')
const path = require('node:path')
const app = express()

// establecer carpeta estatica
app.use(
  express.static(path.join(__dirname, 'public'), { extensions: ['html'] })
)

// 404 handler
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
