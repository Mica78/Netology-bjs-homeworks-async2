import GameSavingLoader from '../gamesavingloader';

test('GameSavingLoader test object', async () => {
  const correctObject = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const res = await GameSavingLoader.load();
  expect(res).toEqual(correctObject);
});
