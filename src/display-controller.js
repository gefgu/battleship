const displayController = (() => {
  const body = document.querySelector("body");

  const createGameboardGrid = () => {
    const gameboardGrid = document.createElement("div");
    gameboardGrid.classList.add("gameboard-grid");
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
    const divGrid = createGameboardGrid();
    const grid = gameboard.show();
    divGrid.childNodes.forEach((row, y) => {
      row.childNodes.forEach((cell, x) => {
        if (grid[y][x] !== "") {
          cell.classList.add("ship");
        }
      });
    });

    body.appendChild(divGrid);
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
