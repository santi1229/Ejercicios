let frutas=[];

frutas.push("Manzana");
frutas.push("Banana");
frutas.push("Cereza");

frutas.pop(); 

frutas.forEach(function(fruta, indice) {
    console.log(indice+1, ": ", fruta);
});
