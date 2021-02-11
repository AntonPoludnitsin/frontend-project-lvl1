import readlineSync from 'readline-sync';

const signs = ['+', '-', '*'];
let name = null;
let result = 0;

const getCorrectAnswer = (num, sign, num2) => {
  switch (sign) {
    case '+':
      return num + num2;
    case '*':
      return num * num2;
    case '-':
      return num - num2;
    default:
      break;
  }
  return undefined;
};

const getQuestion = (num, sign, num2) => {
  console.log(`Question: ${num} ${sign} ${num2}`);
  const correctAnswer = getCorrectAnswer(num, sign, num2);
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
const getRandomSign = () => signs[getRandomNumber(3)];

export const startCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  getQuestion(getRandomNumber(20), getRandomSign(), getRandomNumber(20));
  if (result === 1) {
    getQuestion(getRandomNumber(20), getRandomSign(), getRandomNumber(20));
  }
  if (result === 2) {
    getQuestion(getRandomNumber(20), getRandomSign(), getRandomNumber(20));
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
