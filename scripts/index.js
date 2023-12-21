import changeClass from "./changeClass.js";
import loopButtons from "./buttons.js";
import { styles, buttons } from "./constants.js";
import {
  restart,
  cleanCells,
  ticTacToe,
  maxCells,
  clicks,
} from "./gameLogic.js";

const selectElements = (ele) => document.querySelector(ele);

const area = selectElements("#area");
const shape = selectElements("#shape");
const btnDiv = selectElements("#btnDiv");
const settings = selectElements("#settings");

const theButtons = document.querySelectorAll(".buttons");
theButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "Restart Game") {
      cleanCells();
      restart();
    }
    if (button.textContent == "Back Home") {
      changeClass([settings.parentElement, area], [btnDiv.parentElement]);
    }
  });
});

for (let i = 0; i < maxCells; i++)
  area.innerHTML += `<p class="${styles.pStyles}"></p>`;

btnDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    btnDiv.parentElement.classList.add("diss");
    changeClass(
      [],
      [
        settings.parentElement,
        area,
        shape.parentElement.parentElement.parentElement,
      ]
    );
  }
});

loopButtons(buttons.openingBtns, btnDiv, styles);
loopButtons(buttons.settingsBtns, settings, styles);
ticTacToe(["textContent", "dataset.shape"], area, shape, clicks, maxCells);
