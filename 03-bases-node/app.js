//El paquete yargs está creada para la verificación de parámetros
//que se ingresan por consola a nuestro programa, realizando las 
//verificaciones y agregando comentarios si es necesarios al mismo
const argvYargs = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//module está definido en NodeJS y puede ser utilziado en 
//cualquier parte del programa, en ella se encuentran diferentes
//funciones que le agreguemos para poder hacer reutilziación
//de código en otros archivos
//console.log(module);

//process al igual que module se encuentra disponible en NodeJS
//este contiene ingormación sobre nuestra computadora, usuarios,
//SO, etc. Se puede utilizar para configuraciones globales, 
//ingresar datos a la app etc. 
//console.log(process);

//process.argv tiene los argumentos del programa, por defecto siempre
//hay dos la ubicación de la instalación de NodeJs y la ubicación del 
//archivo en donde nos encontramos
let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(process.argv);
console.log(argvYargs);

// console.log(parametro);


// crearArchivo(base)
//     .then(archivo => console.log(`El archivo tabla-${base}.txt ha sido creado!`))
//     .catch(e => console.log(e));