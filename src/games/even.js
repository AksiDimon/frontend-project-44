import createForAllGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const answer = (number) => {
  const isEven = number % 2 === 0 ? 'yes' : 'no';
  return isEven;
};
const userNumber = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = answer(number);
  return [number, correctAnswer];
};
const playGame = () => {
  createForAllGame(gameRules, userNumber);
};
export default playGame;
