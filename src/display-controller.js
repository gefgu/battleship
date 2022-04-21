const displayController = (() => {
  const body = document.querySelector("body");
  const playerGameboardID = "player-id";
  const botGameboardID = "bot-id";
  const gameboardClass = "gameboard-grid";

  const createGameboardGrid = () => {
    const gameboardGrid = document.createElement("div");
    gameboardGrid.classList.add(gameboardClass);
    for (let y = 0; y < 10; y++) {
      const row = document.createElement("div");
      for (let x = 0; x < 10; x++) {
        const cell = document.createElement("div");
        cell.dataset.x = x;
        cell.dataset.y = y;
        row.appendChild(cell);
      }
      gameboardGrid.appendChild(row);
    }
    return gameboardGrid;
  };

  const createPlayerGameboard = (gameboard) => {
    const playerGameboard = createGameboardGrid();
    playerGameboard.id = playerGameboardID;
    const grid = gameboard.show();
    playerGameboard.childNodes.forEach((row, y) => {
      row.childNodes.forEach((cell, x) => {
        if (grid[y][x] !== "") {
          cell.classList.add("ship");
        }
      });
    });
    gameboard.reportShots().forEach(([x, y]) => {
      playerGameboard.childNodes[y].childNodes[x].classList.add("hit");
    });

    body.appendChild(playerGameboard);
  };

  const createBotGameboard = (gameboard) => {
    const botGrid = createGameboardGrid();
    botGrid.id = botGameboardID;
    gameboard.reportShots().forEach(([x, y]) => {
      botGrid.childNodes[y].childNodes[x].classList.add("hit");
    });
    body.appendChild(botGrid);
  };

  const getPlayerMove = async () => {
    const botGrid = document.querySelector(`#${botGameboardID}`);
    return new Promise((resolve) => {
      botGrid.addEventListener("click", (e) => {
        if (!e.target.classList.contains("hit")) {
          resolve([e.target.dataset.x, e.target.dataset.y]);
        }
      });
    });
  };

  const update = (playerGameboard, botGameboard) => {
    document
      .querySelectorAll(`.${gameboardClass}`)
      .forEach((element) => element.remove());
    createPlayerGameboard(playerGameboard);
    createBotGameboard(botGameboard);
  };

  return {
    createPlayerGameboard,
    createBotGameboard,
    getPlayerMove,
    update,
  };
})();

export { displayController };
