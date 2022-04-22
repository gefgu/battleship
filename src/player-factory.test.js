import { createPlayer } from "./player-factory";
import { createGameboard } from "./gameboard-factory";

test("Make Sucessful Random attack", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  botPlayer.attack(enemyGameboard);
  expect(enemyGameboard.reportShots().length).toBe(1);
});

test("Make 10 Random attacks without repetition", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  for (let i = 0; i < 10; i++) {
    botPlayer.attack(enemyGameboard);
  }
  expect(enemyGameboard.reportShots().length).toBe(10);
});

test("Make 1 Not-Random attack", () => {
  const player = createPlayer();
  const enemyGameboard = createGameboard();
  player.attack(enemyGameboard, 3, 2);
  expect(enemyGameboard.reportShots()).toStrictEqual([[3, 2]]);
});

test("Sunk 1 ship of size 1", () => {
  const player = createPlayer();
  const enemyGameboard = createGameboard();
  enemyGameboard.placeShip(0, 0, 1);
  player.attack(enemyGameboard, 0, 0);
  expect(enemyGameboard.allSunk()).toBe(true);
});

test("Sunk 2 ship of size 3", () => {
  const player = createPlayer();
  const enemyGameboard = createGameboard();
  enemyGameboard.placeShip(0, 0, 3);
  enemyGameboard.placeShip(5, 4, 3);
  player.attack(enemyGameboard, 0, 0);
  player.attack(enemyGameboard, 1, 0);
  player.attack(enemyGameboard, 2, 0);
  player.attack(enemyGameboard, 5, 4);
  player.attack(enemyGameboard, 6, 4);
  player.attack(enemyGameboard, 7, 4);
  expect(enemyGameboard.allSunk()).toBe(true);
});

test("Sunk 1 ship of length 3 with 3 AI shots after left shooting", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  enemyGameboard.placeShip(5, 5, 3);
  botPlayer.attack(enemyGameboard, 5, 5);
  for (let i = 0; i < 3; i++) {
    botPlayer.attack(enemyGameboard);
  }
  expect(enemyGameboard.allSunk()).toBe(true);
});

test("Sunk 1 ship of length 3 with 4 AI shots after middle shooting", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  enemyGameboard.placeShip(5, 5, 3);
  botPlayer.attack(enemyGameboard, 6, 5);
  for (let i = 0; i < 4; i++) {
    botPlayer.attack(enemyGameboard);
  }
  expect(enemyGameboard.allSunk()).toBe(true);
});

test("Sunk 1 ship of length 3 with 3 AI shots after rigth shooting", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  enemyGameboard.placeShip(5, 5, 3);
  botPlayer.attack(enemyGameboard, 7, 5);
  for (let i = 0; i < 3; i++) {
    botPlayer.attack(enemyGameboard);
  }
  expect(enemyGameboard.allSunk()).toBe(true);
});
