const nameEl = document.querySelector(".input-delName input");

const textEl = document.querySelector(".input-delName");
const showBtn = document.querySelector("#showBtn");

showBtn.addEventListener("click", () => {
  if (textEl.classList.contains("hide")) {
    showBtn.innerText = "Hide data";
    showBtn.style.backgroundColor = "rgb(196, 191, 191)";
    textEl.classList.remove("hide");
  } else {
    textEl.classList.add("hide");
    showBtn.style.backgroundColor = "rgb(149, 184, 197)";
    showBtn.innerText = "Show data";
  }
});
