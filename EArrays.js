let libros = [
  { titulo: "El Quijote", autor: "Miguel de Cervantes", anio: 1605 },
  { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", anio: 1967 },
  { titulo: "1984", autor: "George Orwell", anio: 1949 },
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 }
];


libros=libros.filter(libro => libro.anio > 1950);

libros.forEach(libro => {
    console.log(libro.titulo);
});