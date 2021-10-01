import Bowman from '../Bowman';

test('Корректное создание объекта', () => {
  const received = new Bowman('Mark', 'Bowman');
  const expected = {
    name: 'Mark',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Повышение level на 1, attack и defence на 20%', () => {
  const received = new Bowman('Mark', 'Bowman');
  received.levelUp();
  const expected = {
    name: 'Mark',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});

test('Выбрасывание ошибки если health равно 0', () => {
  const received = new Bowman('Mark', 'Bowman');
  received.health = 0;
  expect(() => received.levelUp()).toThrowError('Ошибка! Нельзя повысить левел умершего');
});

test('Значение health не должно меняться, если health равно 0', () => {
  const received = new Bowman('Mark', 'Bowman');
  received.health = 0;
  const expected = {
    name: 'Mark',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  received.damage(40);
  expect(received).toEqual(expected);
});

test('Значение health должно меняться корректно', () => {
  const received = new Bowman('Mark', 'Bowman');
  const expectedHealth = 47.5;
  received.damage(70);
  expect(received.health).toEqual(expectedHealth);
});

test('Значение health должно устанавливаться в 0, если health стал отрицательным', () => {
  const received = new Bowman('Mark', 'Bowman');
  const expectedHealth = 0;
  received.damage(200);
  expect(received.health).toEqual(expectedHealth);
});
