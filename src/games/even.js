import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getLogicOfGame = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, String(correctAnswer)];
};
const playEvenGame = () => {
  runGames(gameRules, getLogicOfGame);
};
export default playEvenGame;
