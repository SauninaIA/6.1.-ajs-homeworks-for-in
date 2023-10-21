import orderByProps from '../sort';

test('sorting object propertiеs', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const result = orderByProps(obj, ['name', 'defence', 'health']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'level', value: 2 }
  ];  

  expect(result).toEqual(expected);
});