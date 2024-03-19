import GameSavingLoader from '../gamesavingloader';

jest.mock('../reader');

it('GameSavingLoader test reject', async () => {
  expect.assertions(1);
  await expect(GameSavingLoader.load()).resolves.toEqual(new Error('oops'));
});
