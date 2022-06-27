const nameEl = document.querySelector(".input-delName input");

// // Get
// // console.log(nameEl.className);

// //To OverWrite ClassName :
// // To SetAttribute :
// nameEl.setAttribute("class", "newClass");

// nameEl.className += " newClass2 newClass3 newClass4";

// // console.log(nameEl.classList);

// // for (let cssStyle of nameEl.classList) {
// //   console.log(cssStyle);
// // }

// console.log(nameEl.classList.length);
// nameEl.classList.add("newClass5");
// console.log(nameEl.classList.contains("newClass3"));
// console.log(nameEl.classList.replace("newClass3", "newClass33"));
// nameEl.classList.remove("newClass4");
// console.log(nameEl.classList);

// setTimeout(() => {
//   console.log(nameEl.classList.toggle("classToggle"));
// }, 5000);
// setTimeout(() => {
//   console.log(nameEl.classList.toggle("classToggle"));
// }, 20000);

const textEl = document.querySelector(".input-delName");
const showBtn = document.querySelector("#showBtn");

showBtn.addEventListener("click", () => {
  if (textEl.classList.contains("hide")) {
    showBtn.innerText = "Hide data";
    showBtn.style.backgroundColor = "rgb(196, 191, 191)";
    textEl.classList.remove("hide");
    // textEl.style.display = "block";
  } else {
    // textEl.style.display = "none";
    textEl.classList.add("hide");
    showBtn.style.backgroundColor = "rgb(149, 184, 197)";
    showBtn.innerText = "Show data";
  }
});
