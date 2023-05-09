import allGame from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const userNumber = () => {
  const number = randomNumber(2, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const game = () => {
  allGame(gameRules, userNumber,);
};
export default game;
