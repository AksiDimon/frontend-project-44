import getRandomNumber from '../utils.js';
import createForAllGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const userNumber = () => {
  const arr = [];
  const length = getRandomNumber(1, 100); // задаем окуда начнутя числа
  const randomStep = getRandomNumber(2, 5); // задаем число прогрессии

  for (let i = 0; i < randomStep * 10; i += randomStep) { // проход по массиву
    arr.push(length + i);
  }

  const hiddenNumber = getRandomNumber(1, 9); // скрытый номер
  const unknowCloseNum = arr[hiddenNumber]; // и способом рандом ищем где закрыть цифру ..
  arr[hiddenNumber] = '..';
  const question = arr.join(' ');

  return [question, unknowCloseNum];
};

const playGame = () => {
  createForAllGame(gameRules, userNumber);
};
export default playGame;
