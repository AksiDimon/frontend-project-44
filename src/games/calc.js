import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

const calc = (randomSign, number1, number2) => {
  let result = 0;
  switch (randomSign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown order state: '${randomSign}'!`);
  }
  return result;
};

const userNumber = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const arr = ['+', '-', '*'];
  const index = getRandomNumber(0, arr.length - 1);
  const randomSign = arr[index];
  const question = `${number1} ${randomSign} ${number2}`;
  const result = calc(randomSign, number1, number2);
  return [question, String(result)];
};

const playGame = () => {
  runGames(gameRules, userNumber);
};
export default playGame;
