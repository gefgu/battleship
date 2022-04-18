import { createPlayer } from "./player-factory";
import { createGameboard } from "./gameboard-factory";

test("Make Sucessful Random attack", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  botPlayer.setEnemyGameboard(enemyGameboard);
  botPlayer.attack();
  expect(enemyGameboard.reportShots().length).toBe(1);
});

test("Make 10 attacks without repetition", () => {
  const botPlayer = createPlayer();
  const enemyGameboard = createGameboard();
  botPlayer.setEnemyGameboard(enemyGameboard);
  for (let i = 0; i < 10; i++) {
    botPlayer.attack();
  }
  expect(enemyGameboard.reportShots().length).toBe(10);
});
