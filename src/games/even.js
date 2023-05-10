import allGame from '../index.js';
import randomNumber from '../randomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const userNumber = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};
const game = () => {
  allGame(gameRules, userNumber);
};
export default game;
