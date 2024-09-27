const http = require("node:http");
const { getFreePort } = require("./free-port");

const server = http.createServer((req, res) => {
  console.log('request received');
  res.end("Hello, world!");
});

getFreePort(8080).then(port => {
  server.listen(port, () => {
    console.log(`
      Servidor de HTTP en puerto localhost:${port} listo!
    `);
  });
});

/*
server.listen(0, () => {
  console.log(`
    Servidor de HTTP en puerto localhost:${server.address().port} listo!
  `);
});
*/
