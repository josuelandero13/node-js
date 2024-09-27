const os = require('node:os');

console.log('información del sistema operativo:');
console.log('nombre del sistema operativo:', os.type());
console.log('nombre de la arquitectura:', os.arch());
console.log('nombre del sistema:', os.platform());
console.log('versión del sistema operativo:', os.release());
console.log('CPU:', os.cpus()[0].model);
console.log('memoria total:', os.totalmem() / 1024 / 1024);
console.log('memoria libre:', os.freemem() / 1024 / 1024);