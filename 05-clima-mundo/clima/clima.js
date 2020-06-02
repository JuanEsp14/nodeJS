const axios = require('axios');

const API_KEY = "05e84050d14c88745e95038936412b97";

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}