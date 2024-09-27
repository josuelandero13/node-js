// process: es un objeto global que contiene información sobre el
// proceso actual de ejecución.

// argumentos de entrada
console.log('argumentos process:', process.argv);

// controlar el proceso y su salida
console.log(1)

// podemos controlar eventos del proceso
process.on('exit', code => {
  console.log('El proceso ha finalizado con el código:', code);
});

// current working directory
console.log('directorio de trabajo:', process.cwd());

// pltaform
console.log('plataforma:', process.platform);

// variables de entorno
console.log('variables de entorno:', process.env(variable));

// proceso de ejecución
console.log('proceso de ejecución:', process.pid);