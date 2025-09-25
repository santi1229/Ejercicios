let libros=[];

libros.push({titulo:"El Quijote", autor:"Miguel de Cervantes", anio:1605});
libros.push({titulo:"Cien Años de Soledad", autor:"Gabriel García Márquez", anio:1967});
libros.push({titulo:"1984", autor:"George Orwell", anio:1949});

libros.forEach(libro => {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
});

libros.pop();

console.log("\nArray final:");
libros.forEach(libro => {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
});
