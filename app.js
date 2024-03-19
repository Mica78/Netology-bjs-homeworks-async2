import GameSavingLoader from './src/gamesavingloader';

(async () => {
  const res = await GameSavingLoader.load();
  return res;
})();
