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

let getEmpleado = async(id) => {
    let empleadoDb = empleados.find(empelado => empelado.id === id);
    if (!empleadoDb) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDb;
    }
}

let getSalario = async(empleado) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDb) {
        throw new Error(`No se encontro salario para el empleado ${empleado.nombre}`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDb.salario
        })
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `El salario del empleado ${resp.nombre} es de ${resp.salario}`;
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));