const loopButtons = (buttons, where, styles) => {
  buttons.forEach((btn) => {
    return (where.innerHTML += `<button class="${styles.buttonStyles}">${btn}</button>`);
  });
};

export default loopButtons;
