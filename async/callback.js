function hola(nombre, micallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    micallback(nombre);
  }, 1500);
}

function adios(nombre, otrocallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otrocallback();
  }, 1000);
}

console.log("Iniciando proceso");
hola("Jorge", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso");
  });
});
