const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    const encoderUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: { 'x-rapidapi-key': '045d915725msh161414a49600870p1f044ajsn045e73e3b5ed' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dire = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dire,
        lat,
        lng
    }
}

module.exports = { getLugarLatLong }