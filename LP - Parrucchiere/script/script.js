const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav-links");

btn.addEventListener("click", function () {
  nav.classList.toggle("aperto");
  btn.setAttribute("aria-expanded", nav.classList.contains("aperto"));
});

console.log(btn);

