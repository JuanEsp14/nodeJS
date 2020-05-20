let empleados = [{
    id: 1,
    nombre: 'Juan'
}, {
    id: 2,
    nombre: 'Eliseo'
}, {
    id: 3,
    nombre: 'Facundo'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/** TENER CUIDADO DE LLAMAR SOLO UN CALLBACK */
let getEmpleado = (id, callback) => {
    let empleadoDb = empleados.find(empelado => empelado.id === id);
    if (!empleadoDb) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDb)
    }
}

let getSalario = (empleado, callback) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDb) {
        callback(`No se encontro salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDb.salario
        })
    }
}

let emp = getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);

    getSalario(empleado, (err, empSal) => {
        if (err) {
            return console.log(err);
        }
        console.log(empSal);
    });
});