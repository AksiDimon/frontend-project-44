import allGame from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const userNumber = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = `${getGcd(number1, number2)}`;
  return [question, answer.toString()];
};

const game = () => {
  allGame(gameRules, userNumber);
};
export default game;
