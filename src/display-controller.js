const displayController = (() => {
  const body = document.querySelector("body");

  const createGameboardGrid = () => {
    const gameboardGrid = document.createElement("div");
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("div");
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        row.appendChild(cell);
      }
      gameboardGrid.appendChild(row);
    }
    return gameboardGrid;
  };

  const createPlayerGameboard = (gameboard) => {
    body.appendChild(createGameboardGrid());
  };

  const createBotGameboard = (gameboard) => {
    body.appendChild(createGameboardGrid());
  };

  return {
    createPlayerGameboard,
    createBotGameboard,
  };
})();

export { displayController };
