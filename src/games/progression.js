import getRandomNumber from '../utils.js';
import runGames from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (randomStep, length) => {
  const arr = [];
  for (let i = 0; i < randomStep * 10; i += randomStep) {
    arr.push(length + i);
  }
  return arr;
};

const getLogicOfGame = () => {
  const length = getRandomNumber(1, 100); // задаем окуда начнутя числа
  const randomStep = getRandomNumber(2, 5); // задаем число прогрессии
  const hiddenNumber = getRandomNumber(1, 9); // скрытый номер

  const array = generateProgression(randomStep, length);

  const unknowCloseNum = array[hiddenNumber]; // и способом рандом ищем где закрыть цифру ..
  array[hiddenNumber] = '..';
  const question = array.join(' ');

  return [question, String(unknowCloseNum)];
};

const playProgressionGame = () => {
  runGames(gameRules, getLogicOfGame);
};
export default playProgressionGame;
