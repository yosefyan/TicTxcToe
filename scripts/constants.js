const styles = {
  buttonStyles:
    "w-[20vw] buttons text-3xl text-blue-400 shadow-lg shadow-blue-500/50 drop-shadow-2xl p-4",
  pStyles:
    "select-none flex justify-center items-center text-7xl border-4 border-transparent border-b-blue-500 shadow-lg shadow-orange-800 drop-shadow-2xl rounded-lg transition-all hover:bg-cyan-200/5",
};

const winningWays = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const buttons = {
  openingBtns: ["PLAY"],
  settingsBtns: ["Restart Game", "Back Home"],
};

export { styles, winningWays, buttons };
