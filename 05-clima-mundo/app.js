const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encoderUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
    headers: { 'x-rapidapi-key': '045d915725msh161414a49600870p1f044ajsn045e73e3b5ed' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error!', err);
    })