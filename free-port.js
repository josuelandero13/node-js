const net = require('node:net');

function getFreePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();

      server.close(() =>{
        resolve(port);
      });
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        getFreePort(0).then(port => resolve(port))
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { getFreePort };