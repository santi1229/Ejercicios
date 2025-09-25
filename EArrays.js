let libros = [
  { titulo: "El Quijote", autor: "Miguel de Cervantes", anio: 1605 },
  { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", anio: 1967 },
  { titulo: "1984", autor: "George Orwell", anio: 1949 },
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 }
];


libros=libros.filter(libro => libro.anio > 1900);
libros=libros.sort((a,b)=>b.anio-a.anio);
tituloAnio=libros.map(libro => libro.titulo+" ("+libro.anio+").");

let anios=libros.map(libro => libro.anio);
let promedio=anios.reduce((a, b) => a + b, 0) / anios.length;


tituloAnio.forEach(libro => {
    console.log(libro);
});
console.log("Promedio de años de publicación:", promedio);
console.log();