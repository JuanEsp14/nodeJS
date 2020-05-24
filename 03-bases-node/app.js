const { crearArchivo } = require('./multiplicar/multiplicar');

//module está definido en NodeJS y puede ser utilziado en 
//cualquier parte del programa, en ella se encuentran diferentes
//funciones que le agreguemos para poder hacer reutilziación
//de código en otros archivos
console.log(module);

//process al igual que module se encuentra disponible en NodeJS
//este contiene ingormación sobre nuestra computadora, usuarios,
//SO, etc. Se puede utilizar para configuraciones globales, 
//ingresar datos a la app etc. 
console.log(process);

//process.argv tiene los argumentos del programa, por defecto siempre
//hay dos la ubicación de la instalación de NodeJs y la ubicación del 
//archivo en donde nos encontramos
console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(parametro);


crearArchivo(base)
    .then(archivo => console.log(`El archivo tabla-${base}.txt ha sido creado!`))
    .catch(e => console.log(e));