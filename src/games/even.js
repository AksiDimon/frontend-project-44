import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const logicGame = () => {
  const number = getRandomNumber(1, 100);
  const isEven = number % 2 === 0 ? 'yes' : 'no';
  const correctAnswer = isEven;
  return [number, String(correctAnswer)];
};
const playEvenGame = () => {
  runGames(gameRules, logicGame);
};
export default playEvenGame;
