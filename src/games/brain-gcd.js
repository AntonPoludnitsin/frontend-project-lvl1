import readlineSync from 'readline-sync';

let name = null;
let result = 0;

const getCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }
  return getCorrectAnswer(b, a % b);
};

const getQuestion = (num, num2) => {
  console.log(`Question: ${num} ${num2}`);
  const correctAnswer = getCorrectAnswer(num, num2);
  const answer = readlineSync.question('Your answer: ');
  if (+answer === correctAnswer) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

const getRandomNumber = (number) => Math.floor(Math.random() * number);

export const startGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  getQuestion(getRandomNumber(100), getRandomNumber(200));
  if (result === 1) {
    getQuestion(getRandomNumber(100), getRandomNumber(200));
  }
  if (result === 2) {
    getQuestion(getRandomNumber(20), getRandomNumber(100));
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
