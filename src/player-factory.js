const createPlayer = () => {
  let enemyGameboard = undefined;
  const setEnemyGameboard = (gameboard) => {
    enemyGameboard = gameboard;
  };
  const attack = () => {
    if (enemyGameboard) {
      const pastShots = enemyGameboard.reportShots();
      while (true) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        if (!pastShots.includes([x, y])) {
          enemyGameboard.receiveAttack(x, y);
          break;
        }
      }
    }
  };

  return {
    setEnemyGameboard,
    attack,
  };
};

export { createPlayer };
