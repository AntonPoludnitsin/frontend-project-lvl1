import readlineSync from 'readline-sync';

const signs = ['+', '-', '*'];

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
  console.log(getCorrectAnswer(num, sign, num2));
};

const getRandomNumber = (number) => Math.floor(Math.random() * number);
const getRandomSign = () => signs[getRandomNumber(3)];

export const getCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  getQuestion(getRandomNumber(20), getRandomSign(), getRandomNumber(20), name);
};

getCalc();
