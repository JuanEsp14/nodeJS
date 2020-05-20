/** La palabra Async me crea una promesa
 * lo que devuelve la función es el resolve.
 * Para el error se puede ejecutar a través del 
 * throw
 */
// let getNombre = async() => {
//     throw new Error("Hay un error en el código");
//     return ' Juan';
// }
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Juan'), 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => console.log(mensaje));