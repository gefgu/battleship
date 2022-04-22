const createPlayer = () => {
  const sucessfulShots = [];

  const getRandomPositions = (pastShots) => {
    while (true) {
      const randomX = Math.floor(Math.random() * 10);
      const randomY = Math.floor(Math.random() * 10);
      if (!pastShots.includes([randomX, randomY])) {
        return [randomX, randomY];
      }
    }
  };

  const attack = (enemyGameboard, x, y) => {
    const pastShots = enemyGameboard.reportShots();
    let selectedX, selectedY;
    if (!pastShots.includes([x, y])) {
      selectedX = x;
      selectedY = y;
    }
    if (x === undefined || y === undefined) {
      [selectedX, selectedY] = getRandomPositions(pastShots);
    }

    const hitAShip = enemyGameboard.receiveAttack(selectedX, selectedY);
    if (hitAShip) {
      sucessfulShots.push([selectedX, selectedY]);
    }
  };

  return {
    attack,
  };
};

export { createPlayer };
