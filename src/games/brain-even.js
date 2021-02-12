import readlineSync from 'readline-sync';

let result = 0;

const getCorrectAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestion = (num, name) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(num);
  if (answer === correctAnswer) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(num)}'.`);
    console.log(`let's try again, ${name}`);
  }
};

const getRandomNumber = () => Math.ceil(Math.random() * 20);

export const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getQuestion(getRandomNumber(), name, result);
  if (result === 1) {
    getQuestion(getRandomNumber(), name, result);
  }
  if (result === 2) {
    getQuestion(getRandomNumber(), name, result);
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
