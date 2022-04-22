import { createPlayer } from "./player-factory";
import { createGameboard } from "./gameboard-factory";
import { displayController } from "./display-controller";

const gameController = (() => {
  const player1 = createPlayer();
  const player2 = createPlayer();
  const player1Gameboard = createGameboard();
  const player2Gameboard = createGameboard();

  let isPlayer1Turn = true;

  // Fisher–Yates shuffle
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const placeBotShips = () => {
    const ySelected = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5);
    const xSelected = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5);

    player2Gameboard.placeShip(
      xSelected[0] <= 5 ? xSelected[0] : 5,
      ySelected[0],
      5
    ); // Carrier
    player2Gameboard.placeShip(
      xSelected[1] <= 6 ? xSelected[1] : 6,
      ySelected[1],
      4
    ); // Battleship
    player2Gameboard.placeShip(
      xSelected[2] <= 7 ? xSelected[2] : 7,
      ySelected[2],
      3
    ); // Destroyer
    player2Gameboard.placeShip(
      xSelected[3] <= 7 ? xSelected[3] : 7,
      ySelected[3],
      3
    ); // Submarine
    player2Gameboard.placeShip(
      xSelected[4] <= 8 ? xSelected[4] : 8,
      ySelected[4],
      2
    ); // Patrol Boat
  };

  const setUp = async () => {
    displayController.update(player1Gameboard, player2Gameboard);

    placeBotShips();

    await Promise.all([
      displayController.getCarrierPosition().then(([x, y]) => {
        player1Gameboard.placeShip(x, y, 5);
        displayController.update(player1Gameboard, player2Gameboard);
      }),
      displayController.getBattleshipPosition().then(([x, y]) => {
        player1Gameboard.placeShip(x, y, 4);
        displayController.update(player1Gameboard, player2Gameboard);
      }),
      displayController.getDestroyerPosition().then(([x, y]) => {
        player1Gameboard.placeShip(x, y, 3);
        displayController.update(player1Gameboard, player2Gameboard);
      }),
      displayController.getSubmarinePosition().then(([x, y]) => {
        player1Gameboard.placeShip(x, y, 3);
        displayController.update(player1Gameboard, player2Gameboard);
      }),
      displayController.getPatrolBoatPosition().then(([x, y]) => {
        player1Gameboard.placeShip(x, y, 2);
        displayController.update(player1Gameboard, player2Gameboard);
      }),
    ]);
  };

  const playTurn = async () => {
    if (isPlayer1Turn) {
      const position = await displayController.getPlayerMove();
      player1.attack(player2Gameboard, position[0], position[1]);
      isPlayer1Turn = false;
    } else {
      player2.attack(player1Gameboard);
      isPlayer1Turn = true;
    }
    displayController.update(player1Gameboard, player2Gameboard);
  };

  const run = async () => {
    await setUp();
    while (!player1Gameboard.allSunk() && !player2Gameboard.allSunk()) {
      await playTurn();
    }
    displayController.showEndMessage(player2Gameboard.allSunk());
  };
  return { run };
})();

export { gameController };

// Fix Drag and Drop in Bot's Gameboard
// Improve bot logic
