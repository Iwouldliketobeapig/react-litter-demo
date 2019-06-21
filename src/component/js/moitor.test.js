import { moitor, subscribedObj } from './moitor.js';

test('set moitior value', () => {
  moitor.test = 3;
  expect(subscribedObj.test).toBe(3);
  moitor.test = 4;
  expect(subscribedObj.test).toBe(4);
});