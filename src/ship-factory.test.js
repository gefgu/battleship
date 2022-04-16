import { createShip } from "./ship-factory";

test("Sunk ship of length 1 after 1 hit", () => {
  const myShip = createShip(1);
  myShip.hit(0);
  expect(myShip.isSunk()).toBe(true);
});

test("Don't sunk ship of length 3 after 1 hit", () => {
  const myShip = createShip(3);
  myShip.hit(1);
  expect(myShip.isSunk()).toBe(false);
});

test("Sunk ship of length 3 after 3 hit", () => {
  const myShip = createShip(1);
  myShip.hit(1);
  myShip.hit(2);
  myShip.hit(0);
  expect(myShip.isSunk()).toBe(true);
});
