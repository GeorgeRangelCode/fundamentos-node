const { exec, spawn } = require("child_process");

// exec("node modulos/console.js", (err, stdout, sterr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);
console.log("proceso", proceso.pid);
console.log("proceso", proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("¿Esta muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("El proceso termino");
  console.log(proceso.killed);
});
