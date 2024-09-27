const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT || 1234

const processRquest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset-utf-8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi primer servidor de HTTP</h1>')
  } else if (req.url === '/got.png') {
    fs.readFile('./got.png', (err, data) => {
      console.log(err)
      if (err) {
        res.statusCode = 500
        res.end('<h1>500: Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset-utf-8')
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset-utf-8')
    res.end('<h1>404: Not Found</h1>')
  }
}

const server = http.createServer(processRquest)

server.listen(desiredPort, () => {
  console.log(`
    Servidor de HTTP en puerto http://localhost:${desiredPort}
  `)
})
