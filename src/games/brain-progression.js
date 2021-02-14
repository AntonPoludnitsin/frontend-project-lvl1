import getRandomNumber from '../utils/random.js';

const lengthProgression = 10;

const indexOfHiddenElement = getRandomNumber(lengthProgression);
const getProgression = () => {
  const firstItem = getRandomNumber(30);
  const step = getRandomNumber(30);
  let count = firstItem;
  const progression = [firstItem];
  for (let i = 1; i < lengthProgression; i += 1) {
    count += step;
    progression.push(count);
  }

  return progression;
};

const hideElement = (array, index) => {
  const copyArray = [...array];
  copyArray[index] = '..';
  return copyArray;
};

const description = 'What number is missing in the progression?';

const getQuestionAndCorrectNumber = () => {
  const array = getProgression();
  const arrayWithoutElement = hideElement(array, indexOfHiddenElement).join(' ');
  const correctAnswer = String(array[indexOfHiddenElement]);
  const question = arrayWithoutElement;
  return { question, correctAnswer };
};

export default { description, getQuestionAndCorrectNumber };
