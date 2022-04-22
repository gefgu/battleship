import { createPlayer } from "./player-factory";
import { createGameboard } from "./gameboard-factory";
import { displayController } from "./display-controller";

const gameController = (() => {
  const player1 = createPlayer();
  const player2 = createPlayer();
  const player1Gameboard = createGameboard();
  const player2Gameboard = createGameboard();

  let isPlayer1Turn = true;

  const placeBotShips = () => {
    const ySelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    player2Gameboard.placeShip(5, ySelected[0], 5); // Carrier
    player2Gameboard.placeShip(6, ySelected[1], 4); // Battleship
    player2Gameboard.placeShip(0, ySelected[2], 3); // Destroyer
    player2Gameboard.placeShip(4, ySelected[3], 3); // Submarine
    player2Gameboard.placeShip(7, ySelected[4], 2); // Patrol Boat
    console.log(ySelected);
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
