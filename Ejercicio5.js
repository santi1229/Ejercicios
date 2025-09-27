/*Dada una palabra, cuenta cuántas veces aparece cada letra.

Ejemplo:
"programacion" → { p:1, r:2, o:2, g:1, a:2, m:1, c:1, i:1, n:1 }*/

let palabra="Programacion";
palabra=palabra.toLowerCase();
palabra=palabra.replace(/ /g, "");

let conteo={};
for(let i=0;i<palabra.length;i++){
    if(palabra[i] in conteo)
        conteo[palabra[i]]+=1;
    else
        conteo[palabra[i]]=1;
}

for (let letra in conteo){
    console.log(letra +": "+conteo[letra]);
}

