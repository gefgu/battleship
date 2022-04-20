import { createPlayer } from "./player-factory";
import { createGameboard } from "./gameboard-factory";
import { displayController } from "./display-controller";

const gameController = (() => {
  const run = () => {
    const player1 = createPlayer();
    const player2 = createPlayer();
    const player1Gameboard = createGameboard();
    player1Gameboard.placeShip(0, 0, 5); // Carrier
    player1Gameboard.placeShip(3, 4, 4); // Battleship
    player1Gameboard.placeShip(7, 2, 3); // Destroyer
    player1Gameboard.placeShip(2, 8, 3); // Submarine
    player1Gameboard.placeShip(5, 5, 2); // Patrol Boat
    const player2Gameboard = createGameboard();
    player2Gameboard.placeShip(5, 3, 5); // Carrier
    player2Gameboard.placeShip(6, 1, 4); // Battleship
    player2Gameboard.placeShip(0, 4, 3); // Destroyer
    player2Gameboard.placeShip(4, 8, 3); // Submarine
    player2Gameboard.placeShip(7, 5, 2); // Patrol Boat

    displayController.createPlayerGameboard(player1Gameboard);
    displayController.createBotGameboard(player2Gameboard);
  };
  return { run };
})();

export { gameController };
