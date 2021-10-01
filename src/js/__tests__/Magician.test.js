import Magician from '../Magician';

test('Корректное создание объекта', () => {
  const received = new Magician('Meggi', 'Magician');
  const expected = {
    name: 'Meggi',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
