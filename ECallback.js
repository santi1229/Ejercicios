function validarUsuarios(usuarios, callback) {
    return usuarios.filter(callback);
}

let usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 17 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Andrés", edad: 15 },
  { nombre: "Lucía", edad: 20 }
];

console.log(validarUsuarios(usuarios, u => u.edad >= 18));
console.log(validarUsuarios(usuarios, u => u.nombre.startsWith("A")));
