const path = require('node:path');

// Barra separadora de carpetas segun el SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename('/home/user/file.txt');
console.log(base);

const dir = path.dirname('/home/user/file.txt');
console.log(dir);

const ext = path.extname('index.html');
console.log(ext);

const name = path.basename('index.html', '.html');
console.log(name);

// Obtener el directorio de trabajo
console.log(process.cwd());