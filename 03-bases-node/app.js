const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 7;

crearArchivo(base)
    .then(archivo => console.log(`El archivo tabla-${base}.txt ha sido creado!`))
    .catch(e => console.log(e));