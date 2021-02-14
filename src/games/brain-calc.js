import getRandomNumber from '../utils/random.js';

const signs = ['+', '-', '*'];
const getRandomSign = () => signs[getRandomNumber(3)];

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
  return new Error('There is no such operator');
};

const description = 'What is the result of the expression?';

const getQuestionAndCorrectNumber = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = getRandomSign();
  const correctAnswer = getCorrectAnswer(num1, sign, num2).toString();
  const question = `${num1} ${sign} ${num2}`;
  return { question, correctAnswer };
};

export default { description, getQuestionAndCorrectNumber };
