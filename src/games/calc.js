import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

const calc = (randomSign, number1, number2) => {
  switch (randomSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${randomSign}'!`);
  }
};

const logicGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const arr = ['+', '-', '*'];
  const index = getRandomNumber(0, arr.length - 1);
  const randomSign = arr[index];
  const question = `${number1} ${randomSign} ${number2}`;
  const result = calc(randomSign, number1, number2);
  return [question, String(result)];
};

const playCalcGame = () => {
  runGames(gameRules, logicGame);
};
export default playCalcGame;
