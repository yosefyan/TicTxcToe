import { winningWays } from "./constants.js";

let clicks = 0;
const maxCells = 9;
let theShape = clicks % 2 === 0 ? "O" : "X";

const restart = () => {
  clicks = 0;
  shape.textContent = "X";
};

const cleanCells = () => {
  for (let i = 0; i < area.children.length; i++) {
    area.children[i].textContent = "";
    area.children[i].classList.remove(
      "pointer-events-none",
      "text-cyan-700",
      "text-orange-700"
    );
  }
};

const hasShape = (cells, shape) => {
  return cells.every((index) => area.children[index].textContent === shape);
};

const ticTacToe = (equalShape) => {
  area.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      clicks++;
      theShape = clicks % 2 === 0 ? "O" : "X";

      shape.textContent = theShape === "O" ? "X" : "O";
      let color = theShape === "O" ? "text-cyan-700" : "text-orange-700";
      e.target.classList.add("pointer-events-none");
      e.target.classList.add(color);

      equalShape.forEach((eq) => (e.target[eq] = theShape));
      let gameWon = false;
      winningWays.forEach((win) => {
        const [first, second, third] = win;
        if (hasShape([first, second, third], theShape)) {
          [
            area.children[first],
            area.children[second],
            area.children[third],
          ].forEach((ar) => {
            ar.classList.add("bg-green-700/25");
            gameWon = true;
            setTimeout(() => {
              cleanCells();
              restart();
              ar.classList.remove("bg-green-700/25");
              gameWon = false;
            }, 1000);
          });
        }
      });
      if (!gameWon && clicks === maxCells) {
        cleanCells();
        restart();
      }
    }
  });
};

export { restart, cleanCells, ticTacToe, maxCells, clicks };
