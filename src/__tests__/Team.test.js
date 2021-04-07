import { expect, test } from '@jest/globals';
import { character1, character2, character3 } from '../js/Character';
import Team from '../js/Team';

test('Метод add должен выбросить ошибку,если добавить существующего персонажа', () => {
  const team = new Team();
  team.add(character1);
  expect(() => team.add(character1).toThrow());
});
test('Метод add добавляет персонажа', () => {
  const template = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  const team = new Team();
  team.add(character1);
  expect([...team.members][0]).toEqual(template);
});
test('Метод addAll добавляет несколько персонажей', () => {
  const team = new Team();
  team.addAll(character1, character2, character3);
  expect(team.members.size).toBe(3);
});
test('Метод addAll не должен добавлять дублирующих персонажей ', () => {
  const team = new Team();
  team.addAll(character1, character2, character2, character3);
  expect(team.members.size).toBe(3);
});
test('Метод должен добавлять несколько персонажей,если их некоторые ключи совпадают', () => {
  const team = new Team();
  const character4 = {
    name: 'Petr',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  team.addAll(character1, character2, character3, character4);
  expect(team.members.size).toBe(4);
});
test('Метод toArray должен возвращать массив персонажей', () => {
  const team = new Team();
  team.addAll(character1, character2, character3);
  expect(team.toArray()).toBeInstanceOf(Array);
});
