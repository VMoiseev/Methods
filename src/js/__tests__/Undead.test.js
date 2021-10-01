import Undead from '../Undead';

test('Корректное создание объекта', () => {
  const received = new Undead('Zuldan', 'Undead');
  const expected = {
    name: 'Zuldan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
