const displayController = (() => {
  const playerGameboardID = "player-id";
  const botGameboardID = "bot-id";
  const gameboardClass = "gameboard-grid";
  const gridContainerClassName = "grid-container";

  const body = document.querySelector("body");
  const heading = document.createElement("h1");
  heading.textContent = "BATTLESHIP";
  body.appendChild(heading);
  const gridContainer = document.createElement("div");
  gridContainer.classList.add(gridContainerClassName);
  body.appendChild(gridContainer);

  // Allow drop events
  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  document.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });

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
    const playerSpace = document.createElement("div");
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

    const label = document.createElement("h3");
    label.textContent = "Player's Gameboard";

    playerSpace.appendChild(playerGameboard);
    playerSpace.appendChild(label);

    gridContainer.appendChild(playerSpace);
  };

  const createBotGameboard = (gameboard) => {
    const botSpace = document.createElement("div");
    const botGrid = createGameboardGrid();
    botGrid.id = botGameboardID;
    const grid = gameboard.show();
    gameboard.reportShots().forEach(([x, y]) => {
      botGrid.childNodes[y].childNodes[x].classList.add("hit");
      if (grid[y][x] !== "") {
        botGrid.childNodes[y].childNodes[x].classList.add("ship");
      }
    });

    const label = document.createElement("h3");
    label.textContent = "Bot's Gameboard";

    botSpace.appendChild(botGrid);
    botSpace.appendChild(label);

    gridContainer.appendChild(botSpace);
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
    document.querySelector(`.${gridContainerClassName}`).textContent = "";
    createPlayerGameboard(playerGameboard);
    createBotGameboard(botGameboard);
  };

  // create ships
  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("ships-container");
  const carrier = document.createElement("div");
  carrier.draggable = true;
  carrier.id = "carrier";
  const battleship = document.createElement("div");
  battleship.draggable = true;
  battleship.id = "battleship";
  const destroyer = document.createElement("div");
  destroyer.draggable = true;
  destroyer.id = "destroyer";
  const submarine = document.createElement("div");
  submarine.draggable = true;
  submarine.id = "submarine";
  const patrol = document.createElement("div");
  patrol.draggable = true;
  patrol.id = "patrol";

  shipsContainer.append(carrier, battleship, destroyer, submarine, patrol);
  body.appendChild(shipsContainer);

  let dragged;

  document.addEventListener("dragstart", (event) => {
    dragged = event.target;
  });

  const resolvePositionOfDrop = (shipObject, size, resolveMethod) => {
    document.addEventListener("drop", (event) => {
      const x = +event.target.dataset.x;
      const y = +event.target.dataset.y;
      if (dragged === shipObject && x + size <= 10) {
        dragged.remove();
        resolveMethod([x, y]);
      }
    });
  };

  const getCarrierPosition = () => {
    return new Promise((resolve) => resolvePositionOfDrop(carrier, 5, resolve));
  };
  const getBattleshipPosition = () => {
    return new Promise((resolve) => {
      battleship.addEventListener("click", () => {
        resolve([1, 1]);
      });
    });
  };
  const getDestroyerPosition = () => {
    return new Promise((resolve) => {
      destroyer.addEventListener("click", () => {
        resolve([2, 2]);
      });
    });
  };
  const getSubmarinePosition = () => {
    return new Promise((resolve) => {
      submarine.addEventListener("click", () => {
        resolve([3, 3]);
      });
    });
  };
  const getPatrolBoatPosition = () => {
    return new Promise((resolve) => {
      patrol.addEventListener("click", () => {
        resolve([4, 4]);
      });
    });
  };

  return {
    getPlayerMove,
    update,
    getCarrierPosition,
    getBattleshipPosition,
    getDestroyerPosition,
    getSubmarinePosition,
    getPatrolBoatPosition,
  };
})();

export { displayController };
