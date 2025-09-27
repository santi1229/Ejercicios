//Dado un arreglo de números, encuentra el máximo y mínimo

let arreglo=[5,6,8,41,5];
if(arreglo.length>0){
    let maximo=arreglo[0];
    let minimo=maximo;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]>maximo)
            maximo=arreglo[i];
        if(arreglo[i]<minimo)
            minimo=arreglo[i];
    }
    console.log(`El maximo es: ${maximo}\nEl minimo es: ${minimo}`)
}
else{
    console.log("Arreglo vacio.");
}


