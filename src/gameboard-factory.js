import { createShip } from "./ship-factory";

const createGameboard = () => {
  let grid = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => "")
  );
  let ships = {};
  let shots = [];
  const placeShip = (x, y, length) => {
    const placeIsEmpty = grid[y].slice(x, x + length).reduce((prev, curr) => {
      if (curr === "") {
        return true && prev;
      }
      return false;
    }, true);
    const hasSpaceForShip = x + length <= 10;
    if (!placeIsEmpty || !hasSpaceForShip) {
      throw new TypeError("Invalid Ship Location");
    }
    const ship = createShip(length);
    const shipName = `ship${Object.keys(ships).length}`;
    ships[shipName] = ship;
    for (let i = 0; i < length; i++) {
      grid[y][x + i] = `${shipName}.${i}`;
    }
  };
  const receiveAttack = (x, y) => {
    const cellContent = grid[y][x];
    shots.push([x, y]);
    if (cellContent.includes("ship")) {
      const shipName = cellContent.split(".")[0];
      ships[shipName].hit(+cellContent.split(".")[1]);
      return true;
    }
    return false;
  };
  const allSunk = () => {
    return Object.keys(ships)
      .map((key) => ships[key].isSunk())
      .reduce((prev, curr) => prev && curr, true);
  };
  const reportShots = () => shots;
  const show = () => grid;
  return {
    placeShip,
    receiveAttack,
    allSunk,
    reportShots,
    show,
  };
};

export { createGameboard };
