import Zombie from '../Zombie';

test('Корректное создание объекта', () => {
  const received = new Zombie('Phil', 'Zombie');
  const expected = {
    name: 'Phil',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
