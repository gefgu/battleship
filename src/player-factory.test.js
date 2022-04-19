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
