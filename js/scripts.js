const themeSwitch = document.getElementById("switch");
const body = document.querySelector("body");
const labelText = document.querySelector(".label-text");
const cards = document.querySelectorAll(".card");

themeSwitch.addEventListener("input", () =>
  body.classList.toggle("light-theme")
);

labelText.addEventListener("click", () => {
  themeSwitch.click();
});
