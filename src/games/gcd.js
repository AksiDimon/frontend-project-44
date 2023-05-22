import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const userNumber = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = `${getGcd(number1, number2)}`;
  return [question, String(answer)];
};

const playGcdGame = () => {
  runGames(gameRules, userNumber);
};
export default playGcdGame;
