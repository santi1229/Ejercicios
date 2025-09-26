/*Escribe una función que verifique si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).

Ejemplo: "oso" → true, "perro" → false.*/

function esPalindromo(texto){
    texto=texto.toLowerCase();
    texto=texto.replace(/ /g, "");
    texto=texto.split("");
    console.log(texto)
    for(let i=0; i<texto.length/2;i++){
        if(texto[i]!=texto[texto.length-i-1])
            return false;
    }
    return true;
}

let frase="oso";
console.log(esPalindromo(frase));
