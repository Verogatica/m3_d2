const gato = document.querySelector("#imgato");
gato.style.border = "2px solid red";

gato.addEventListener("click", function () {
  const bordeImgGato = imgato.style.border;
  if (bordeImgGato === "2px solid red") {
    imgato.style.border = "";
  } else {
    imgato.style.border = "2px solid red";
  }
});

const Uno = document.querySelector("#unidadesUno");
const Dos = document.querySelector("#unidadesDos");
const Tres = document.querySelector("#unidadesTres");
const respuesta = document.querySelector("#respuesta");

let cantidadStickers =
  parseInt(Uno.value) + parseInt(Dos.value) + parseInt(Tres.value);

Uno.addEventListener("change", stickers);
Dos.addEventListener("change", stickers);
Tres.addEventListener("change", stickers);

function stickers() {
  let cantidadStickers =
    parseInt(Uno.value) + parseInt(Dos.value) + parseInt(Tres.value);
  if (cantidadStickers > 10) {
    respuesta.innerHTML = "Llevas demasiados stickers";
  } else if (cantidadStickers === 1) {
    respuesta.innerHTML = "Llevas " + cantidadStickers + " sticker";
  } else {
    respuesta.innerHTML = "Llevas " + cantidadStickers + " stickers";
  }
}

const passUno = document.querySelector("#passUno");
const passDos = document.querySelector("#passDos");
const passTres = document.querySelector("#passTres");
const respuestapass = document.querySelector("#respuestapass");
const boton = document.querySelector("#boton");

function pass() {
    let password = passUno.value + passDos.value + passTres.value;
    if (password === "911") {
        respuestapass.innerHTML = "password1 correcto";
    } else if (password === "714") {
        respuestapass.innerHTML = "password2 correcto";
    } else {
        respuestapass.innerHTML = "password incorrecto";
    }
}

boton.addEventListener("click", pass);