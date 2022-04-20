var haus = document.getElementById("haus_container");
var auto = document.getElementById("auto_container");

function showHaus() {
  haus.style.display = "flex";
  auto.style.display = "none";
}

function showAuto() {
  auto.style.display = "flex";
  haus.style.display = "none";
}
