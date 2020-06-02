const opciones = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de una tarea por hacer'
    }
};

const opcionesActualizar = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de una tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opciones)
    .command('actualizar', 'Actualiza el estado de una tarea', opcionesActualizar)
    .command('borrar', 'Borra un elemento por hacer', opciones)
    .help()
    .argv;

module.exports = {
    argv
}