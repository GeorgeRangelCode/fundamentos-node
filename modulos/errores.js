function otraFunction() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.log("seRompeAsincrona- Vaya algo se ha roto: ", error.message);
      cb(error);
    }
  }, 2000);
}

try {
  // otraFunction();
  seRompeAsincrona(function () {
    console.log("Hay error");
  });
} catch (error) {
  console.log("Vaya algo se ha roto: ", error.message);
  console.log("Pero no passa nada lo hemos capturado");
}

console.log("Esto de aqui esta al final ");
