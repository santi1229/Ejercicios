//Dado un texto, devuelve ese mismo texto al revés.
let texto="hola";
let alrevez="";
for(let i=texto.length-1; i>=0; i--){
    alrevez+=texto[i];
}
console.log(alrevez);