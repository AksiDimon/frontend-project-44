import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const userNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${userNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (userNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else {
      const opposite = (userAnswer === 'yes') ? 'no' : 'yes';
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${opposite}. 
    Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { game };
