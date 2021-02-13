import readlineSync from 'readline-sync';

let name = null;
let result = 0;
const lengthProgression = 10;
let correctAnswer = null;
const getRandomNumber = (number) => Math.floor(Math.random() * number);
const getProgression = () => {
  const firstItem = getRandomNumber(30);
  const diffItem = getRandomNumber(30);
  const missingItem = getRandomNumber(lengthProgression);
  let count = firstItem;
  const progression = [firstItem];
  for (let i = 1; i < lengthProgression; i += 1) {
    count += diffItem;
    if (i === missingItem) {
      correctAnswer = count;
      progression.push('..');
    } else {
      progression.push(count);
    }
  }
  return progression.join(' ');
};

const getQuestion = () => {
  console.log(`Question: ${getProgression()}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(correctAnswer)) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  getQuestion();
  if (result === 1) {
    getQuestion();
  }
  if (result === 2) {
    getQuestion();
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
