const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

module.exports = {
    crear
}