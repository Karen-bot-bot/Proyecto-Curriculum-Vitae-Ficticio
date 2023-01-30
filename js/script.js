const infoLink = document.getElementById("info-link");
const educacionLink = document.getElementById("educacion-link");
const experienciaLink = document.getElementById("experiencia-link");
const habilidadesLink = document.getElementById("habilidades-link");

const infoSection = document.getElementById("info");
const educacionSection = document.getElementById("educacion");
const experienciaSection = document.getElementById("experiencia");
const habilidadesSection = document.getElementById("habilidades");

infoLink.addEventListener("click", function () {
  infoSection.style.display = "block";
  educacionSection.style.display = "none";
  experienciaSection.style.display = "none";
  habilidadesSection.style.display = "none";
});

educacionLink.addEventListener("click", function () {
  infoSection.style.display = "none";
  educacionSection.style.display = "block";
  experienciaSection.style.display = "none";
  habilidadesSection.style.display = "none";
});

experienciaLink.addEventListener("click", function () {
  infoSection.style.display = "none";
  educacionSection.style.display = "none";
  experienciaSection.style.display = "block";
  habilidadesSection.style.display = "none";
});

habilidadesLink.addEventListener("click", function () {
  infoSection.style.display = "none";
  educacionSection.style.display = "none";
  experienciaSection.style.display = "none";
  habilidadesSection.style.display = "block";
});
