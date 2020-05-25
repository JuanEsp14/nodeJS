const opciones = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

//El paquete yargs está creada para la verificación de parámetros
//que se ingresan por consola a nuestro programa, realizando las 
//verificaciones y agregando comentarios si es necesarios al mismo
const argvYargs = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Guarda en un archivo la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argvYargs
}