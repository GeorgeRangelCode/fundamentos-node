function hola(nombre, micallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    micallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otrocallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otrocallback();
  }, 1000);
}

/** función recursiva para evitar el callbackHell */

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso");
hola("Jorge", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});

// hola("Jorge", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Terminando proceso");
//         });
//       });
//     });
//   });
// });
