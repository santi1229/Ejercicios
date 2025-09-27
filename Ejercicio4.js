/*Tienes un array de edades. Devuelve un nuevo array que indique si cada persona es "Mayor de edad" o "Menor de edad".*/
let edades = [10, 15, 18, 22, 30, 12, 19];

let arr=edades.map(edad=>{
    if (edad>=18)
        return "Mayor de edad";
    return "Menor de edad";
});

console.log(arr);