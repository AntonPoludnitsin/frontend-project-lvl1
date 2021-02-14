import getRandomNumber from '../utils/random.js';

const getCorrectAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectNumber = () => {
  const number = getRandomNumber();
  const correctAnswer = getCorrectAnswer(number);
  const question = number.toString();
  return { question, correctAnswer };
};

export default { description, getQuestionAndCorrectNumber };
