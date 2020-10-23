const tabla = [
  { a: "1", b: "A" },
  { a: "2", b: "B" },
];

console.table(tabla);

console.group("Conversación");
console.log("Hola");
console.group("bla");
console.log("Bla bla bla..");
console.log("Bla bla bla..");
console.log("Bla bla bla..");
console.groupEnd("bla");
console.log("Adios");
console.groupEnd("Conversación");
console.log("Otras cosas de otra funcion");

function function1(params) {
  console.group("funcion 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto tambien");
  function2();
  console.log("Hemos vuelto a la funcion 1");
  console.groupEnd("funcion 1");
}

function function2() {
  console.group("funcion 2");
  console.log("Esta es de la funcion 2");
  console.groupEnd("funcion 2");
}

console.log("Empezamos");

function1();

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
