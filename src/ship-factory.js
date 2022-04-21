const createShip = (length) => {
  let hitLocations = Array.from({ length: length }, () => false);
  return {
    hit: (position) => {
      hitLocations[position] = true;
    },
    isSunk: () => {
      return hitLocations.reduce((prev, curr) => prev && curr, true);
    },
  };
};

export { createShip };
