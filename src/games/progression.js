import randomNumber from '../randomNumber.js';
import allGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const userNumber = () => {
  const arr = [];
  const length = randomNumber(1, 100); // задаем окуда начнутя числа
  const randomStep = randomNumber(2, 5); // задаем число прогрессии

  for (let i = 0; i < randomStep * 10; i += randomStep) { // проход по массиву
    arr.push(length + i); // пушим в массив каждое значание с шагом randomStep что бы шаг  од чисел был нужной велечины
  }

  const hiddenNumber = randomNumber(1, 9); // скрытый номер
  const unknowCloseNum = arr[hiddenNumber]; // и способом рандом ищем где закрыть цифру ..
  arr[hiddenNumber] = '..';
  const question = arr.join('  ').toString();

  return [question, unknowCloseNum.toString()];
};

const game = () => {
  allGame(gameRules, userNumber);
};
export default game;