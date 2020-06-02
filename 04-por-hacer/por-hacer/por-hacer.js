const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }

    return false;
}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length != listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }

    return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}

//[{ "descripcion": "Comer", "completado": false }, { "descripcion": "Dormir", "completado": false }, { "descripcion": "Salir", "completado": "false" }]