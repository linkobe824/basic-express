const express = require('express')
const path = require('node:path')
const app = express()

// establecer carpeta estatica
app.use(
  express.static(path.join(__dirname, 'public'), { extensions: ['html'] })
)

// 404 handler
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', '404.html'))
// })
app.use((req, res) => {
  res.statusCode = 404
  res.sendFile(path.resolve(__dirname, 'public', '404.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
