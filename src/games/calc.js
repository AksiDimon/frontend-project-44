import allGame from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'What is the result of the expression?';

const calc = (randomSign, number1, number2) => {
  let result = 0;
  if (randomSign === '+') {
    result = number1 + number2;
  } if (randomSign === '-') {
    result = number1 - number2;
  } if (randomSign === '*') {
    result = number1 * number2;
  }
  return result;
};

const userNumber = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const arr = ['+', '-', '*'];
  const index = randomNumber(0, arr.length - 1);
  const randomSign = arr[index];
  const question = `${number1} ${randomSign} ${number2}`;
  const result = calc(randomSign, number1, number2);
  return [question, result];
};

const playGame = () => {
  allGame(gameRules, userNumber);
};
export default playGame;
