import allGame from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'What is the result of the expression?';

const calc = (randomSign, number1, number2) => {
  if (randomSign === '+') {
    return number1 + number2;
  } if (randomSign === '-') {
    return number1 - number2;
  } if (randomSign === '*') {
    return number1 * number2;
  }
};

const userNumber = () => {
  const number1 = randomNumber(100);
  const number2 = randomNumber(100);
  const arr = ['+', '-', '*'];
  const index = randomNumber(arr.length - 1);
  const randomSign = arr[index];
  const question = `${number1} ${randomSign} ${number2}`;
  const result = calc(randomSign, number1, number2);
  return [question, result];
};

const calcGame = () => {
  allGame(gameRules, userNumber);
};
export default calcGame;
