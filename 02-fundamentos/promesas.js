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

/** Todas las promesas tienen un dos funcionas una de que se
 * resolvió de manera correcta y otra de error. 
 * En el Resolve, no se puede devolver dos valores, si así se
 * quiere hay que devolver un objeto
 */
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDb = empleados.find(empelado => empelado.id === id);
        if (!empleadoDb) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDb)
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDb = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDb) {
            reject(`No se encontro salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.salario
            })
        }
    });
}

getEmpleado(1).then(empleado =>
    getSalario(empleado).then(resp => console.log(`El salario del empleado ${resp.nombre} es de ${resp.salario}`)),
    (err) => console.log(err));