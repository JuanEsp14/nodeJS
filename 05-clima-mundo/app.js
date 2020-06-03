const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let ciudad = await lugar.getLugarLatLong(direccion);
        let temp = await clima.getClima(ciudad.lat, ciudad.lng);
        return `El clima de ${direccion} es de ${temp}°`;
    } catch {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);