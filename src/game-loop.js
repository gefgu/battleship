import { createPlayer } from "./player-factory";
import { createGameboard } from "./gameboard-factory";
import { displayController } from "./display-controller";

const gameController = (() => {
  const player1 = createPlayer();
  const player2 = createPlayer();
  const player1Gameboard = createGameboard();
  const player2Gameboard = createGameboard();

  let isPlayer1Turn = true;

  const setUp = () => {
    player1Gameboard.placeShip(0, 0, 5); // Carrier
    player1Gameboard.placeShip(3, 4, 4); // Battleship
    player1Gameboard.placeShip(7, 2, 3); // Destroyer
    player1Gameboard.placeShip(6, 8, 3); // Submarine
    player1Gameboard.placeShip(1, 6, 2); // Patrol Boat

    player2Gameboard.placeShip(5, 3, 5); // Carrier
    player2Gameboard.placeShip(6, 1, 4); // Battleship
    player2Gameboard.placeShip(0, 4, 3); // Destroyer
    player2Gameboard.placeShip(4, 8, 3); // Submarine
    player2Gameboard.placeShip(7, 5, 2); // Patrol Boat

    displayController.createPlayerGameboard(player1Gameboard);
    displayController.createBotGameboard(player2Gameboard);
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
    setUp();
    while (!player1Gameboard.allSunk() || !player2Gameboard.allSunk()) {
      await playTurn();
    }
  };
  return { run };
})();

export { gameController };
