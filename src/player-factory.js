const createPlayer = () => {
  const sucessfulShots = [];

  const getRandomPosition = (pastShots) => {
    while (true) {
      const randomX = Math.floor(Math.random() * 10);
      const randomY = Math.floor(Math.random() * 10);
      if (
        !pastShots.some((shot) => shot[0] === randomX && shot[1] === randomY)
      ) {
        return [randomX, randomY];
      }
    }
  };

  const getProbablePosition = (pastShots) => {
    let probablePosition;
    sucessfulShots.some((goodShoot) => {
      const leftPossibility = [goodShoot[0] - 1, goodShoot[1]];
      if (
        leftPossibility[0] >= 0 &&
        !pastShots.some(
          (shot) =>
            shot[0] === leftPossibility[0] && shot[1] === leftPossibility[1]
        )
      ) {
        probablePosition = leftPossibility;
        return true;
      }
      const rightPossibility = [goodShoot[0] + 1, goodShoot[1]];
      if (
        rightPossibility[0] < 10 &&
        !pastShots.some(
          (shot) =>
            shot[0] === rightPossibility[0] && shot[1] === rightPossibility[1]
        )
      ) {
        probablePosition = rightPossibility;
        return true;
      }
    });
    if (probablePosition) return probablePosition;
    return getRandomPosition(pastShots);
  };

  const attack = (enemyGameboard, x, y) => {
    const pastShots = enemyGameboard.reportShots();
    let selectedX, selectedY;
    if (!pastShots.includes([x, y])) {
      selectedX = x;
      selectedY = y;
    }
    if (x === undefined || y === undefined) {
      [selectedX, selectedY] = getProbablePosition(pastShots);
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
