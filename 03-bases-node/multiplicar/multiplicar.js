const fs = require('fs');

crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido(${base}) no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += ` ${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tablas/tabla-${base}.txt`);
        });
    })
}

//Se le añaden las funciones que queremos exportar, desde
//ES6 permite poner solo un nombre, si se quiere cambiar el 
//nombre de la función se puede hacer 
//nombreNuevo: funcionAExportar
module.exports = {
    crearArchivo
}