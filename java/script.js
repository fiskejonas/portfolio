window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".toggle-btn").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("nav").classList.toggle("hidden");

  let erSkjult = document.querySelector("nav").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector(".toggle-btn").textContent = "X";
  } else {
    document.querySelector(".toggle-btn").textContent = "☰";
  }
}
