import { createGameboard } from "./gameboard-factory";

test("All sunk after attack in 1 ship of length 1", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 1);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.allSunk()).toBe(true);
});

test("Not all sunk after missed attack in 1 ship of length 1", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 1);
  gameboard.receiveAttack(1, 0);
  expect(gameboard.allSunk()).toBe(false);
});

test("All sunk after attack in 2 ship of length 3", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 3);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);

  gameboard.placeShip(0, 1, 3);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(2, 1);
  expect(gameboard.allSunk()).toBe(true);
});

test("Report all shots", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 3);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 2);
  expect(gameboard.reportShots()).toStrictEqual([
    [0, 1],
    [1, 0],
    [2, 2],
  ]);
});

test("Return true for sucessful attack", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 3);
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
});

test("Return false for failed attack", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 3);
  expect(gameboard.receiveAttack(5, 4)).toBe(false);
});

test("Test invalid ship location because of position", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 3);
  expect(() => gameboard.placeShip(0, 0, 2)).toThrow(TypeError);
});

test("Test invalid ship location because of length", () => {
  const gameboard = createGameboard();
  expect(() => gameboard.placeShip(9, 4, 3)).toThrow(TypeError);
});

test("Show of Grid with one ship", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(0, 0, 1);
  const correctGrid = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => "")
  );
  correctGrid[0][0] = "ship0.0";
  expect(gameboard.show()).toStrictEqual(correctGrid);
});
