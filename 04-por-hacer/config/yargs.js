const opcionesCrear = {
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
    .command('crear', 'Crear un elemento por hacer', opcionesCrear)
    .command('actualizar', 'Actualiza el estado de una tarea', opcionesActualizar)
    .help()
    .argv;

module.exports = {
    argv
}