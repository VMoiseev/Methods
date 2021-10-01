import Swordsman from '../Swordsman';

test('Корректное создание объекта', () => {
  const received = new Swordsman('Chuckie', 'Swordsman');
  const expected = {
    name: 'Chuckie',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
