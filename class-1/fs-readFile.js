const fs = require('node:fs');

console.log('Leyendo archivo 1...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text);
});

console.log('Hacer cosas mientras leo el archivo...');

console.log('Leyendo archivo 2...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text);
});