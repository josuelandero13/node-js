/*
  -->> ESTO SOLO EN LOS MODULOS NATIVOS QUE NO TIENEN PROMESAS NATIVAS
  const { promisify } = require('node:util');
  const readFilePromise = promisify(fs.readFile);

  console.log('Leyendo archivo 1...');
  fs.readFilePromise('./archivo.txt', 'utf-8')
    .then(text => {
      console.log('primer texto', text);
    })
*/

/*
   --> ASINCRNOS SECUENCIAL
  IIFE (Immediately Invoked Function Expression)
  (
    async () => {
      console.log('Leyendo archivo 1...');
      const text = await fs.readFile('./archivo.txt', 'utf-8');
      console.log('primer texto', text);
    }
  )()
*/

/*
   --> ASINCRNOS SECUENCIAL
  const fs = require('node:fs/promises');
  async function readFile1() {
    console.log('Leyendo archivo 1...');
    const text = await fs.readFile('./archivo.txt', 'utf-8');
    console.log('primer texto', text
  
    console.log('Leyendo archivo 2...');
    const text2 = await fs.readFile('./archivo2.txt', 'utf-8');
    console.log('segundo texto', text2);
  }
    );
  }
*/

/*
   --> ASINCRNOS PARALELO
  import fs from 'node:fs/promises';

  Promise.all([
    fs.readFile('./archivo.txt', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8')
  ]).then(([text1, text2]) => {
    console.log('primer texto', text1);
    console.log('segundo texto', text2);
  });
*/


// ASINCRONO CALLBACK
const fs = require('node:fs/promises');

console.log('Leyendo archivo 1...');
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto', text);
  })

console.log('Hacer cosas mientras leo el archivo...');

console.log('Leyendo archivo 2...');
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto', text);
  })