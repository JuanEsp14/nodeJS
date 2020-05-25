//El paquete yargs está creada para la verificación de parámetros
//que se ingresan por consola a nuestro programa, realizando las 
//verificaciones y agregando comentarios si es necesarios al mismo
const argvYargs = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            alias: 'b',
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Guarda en un archivo la tabla de multiplicar', {
        base: {
            alias: 'b',
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

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

console.log(process.argv);
console.log(argvYargs);

let comando = argvYargs._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argvYargs.base, argvYargs.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argvYargs.base, argvYargs.limite)
            .then(archivo => console.log(`El archivo tabla-${argvYargs.base}.txt ha sido creado!`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}