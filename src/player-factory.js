const createPlayer = () => {
  const attack = (enemyGameboard, x, y) => {
    const pastShots = enemyGameboard.reportShots();
    if (x === undefined || y === undefined) {
      while (true) {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        if (!pastShots.includes([randomX, randomY])) {
          enemyGameboard.receiveAttack(randomX, randomY);
          return;
        }
      }
    }
    if (!pastShots.includes([x, y])) {
      enemyGameboard.receiveAttack(x, y);
    }
  };

  return {
    attack,
  };
};

export { createPlayer };
