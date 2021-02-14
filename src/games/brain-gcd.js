import getRandomNumber from '../utils/random.js';

const getCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }
  return getCorrectAnswer(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndCorrectNumber = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const correctAnswer = getCorrectAnswer(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return { question, correctAnswer };
};

export default { description, getQuestionAndCorrectNumber };
