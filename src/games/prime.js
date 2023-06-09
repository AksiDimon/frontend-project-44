import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getLogicOfGame = () => {
  const number = getRandomNumber(2, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, String(answer)];
};

const playPrimeGame = () => {
  runGames(gameRules, getLogicOfGame);
};
export default playPrimeGame;
