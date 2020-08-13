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

window.addEventListener("load", () => {
  let version = Number(
    navigator.userAgent.substring(
      navigator.userAgent.indexOf("Chrome") + "Chrome".length - 1 + 2,
      navigator.userAgent.indexOf("Chrome") + "Chrome".length - 1 + 2 + 2
    )
  );
  if (version < 84) {
    body.classList.add("old");
  }
});
