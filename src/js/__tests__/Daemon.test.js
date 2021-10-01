import Daemon from '../Daemon';

test('Корректное создание объекта', () => {
  const received = new Daemon('Bob', 'Daemon');
  const expected = {
    name: 'Bob',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
