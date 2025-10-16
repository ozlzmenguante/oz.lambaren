document.getElementById("botonSaludo").addEventListener("click", () => {
  let nombre = prompt("¿Cómo te llamas?");

  if (nombre) {
      localStorage.setItem("nombreUsuario", nombre);
      document.getElementById("mensaje").textContent = `¡Hola, ${nombre}! Bienvenido a mi página 😄`;
  } else {
      document.getElementById("mensaje").textContent = "¡Hola extraño!";
  }
});

document.getElementById("botonCambiar").addEventListener("click", () => {
  const colores = ["#ffb3b3", "#b3ffb3", "#b3d9ff", "#fff0b3", "#e0b3ff"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
});

let visitas = localStorage.getItem("visitas");
if (!visitas) {
  visitas = 1;
} else {
  visitas = parseInt(visitas) + 1;
}
localStorage.setItem("visitas", visitas);

const contador = document.getElementById("contador");
contador.textContent = `Has visitado esta página ${visitas} veces.`;

if (visitas >= 10) {
  contador.textContent += " ¡Wow, cuantas visitas! ¡Contacta al administrador para un regalo sorpresa! 🎉";
}

const botonSonido = document.getElementById("botonSonido");
const sonido = document.getElementById("sonido");

botonSonido.addEventListener("click", () => {
  sonido.play();
  alert("¡Que no des click! ¡Ya despertaste a los vecinos!");
});