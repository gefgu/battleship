import { createShip } from "./ship-factory";

const createGameboard = () => {
  let grid = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => "")
  );
  let ships = {};
  const placeShip = (x, y, length) => {
    const ship = createShip(length);
    const shipName = `ship${Object.keys(ships).length}`;
    ships[shipName] = ship;
    for (let i = 0; i < length; i++) {
      grid[y][x + i] = `${shipName}.${x + i}`;
    }
  };
  const receiveAttack = (x, y) => {
    const cellContent = grid[y][x];
    if (cellContent.includes("ship")) {
      const shipName = cellContent.split(".")[0];
      ships[shipName].hit(+cellContent.split(".")[1]);
    }
  };
  const allSunk = () => {
    return Object.keys(ships)
      .map((key) => ships[key].isSunk())
      .reduce((prev, curr) => prev && curr, true);
  };
  return {
    placeShip,
    receiveAttack,
    allSunk,
  };
};

export { createGameboard };
