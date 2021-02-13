import readlineSync from 'readline-sync';

let name = null;
let result = 0;

function getPrimes(num) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i += 1) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        seive[j] = j;
      }
    }
  }
  return primes.includes(num) ? 'yes' : 'no';
}

const getQuestion = (num) => {
  console.log(`Question: ${num}`);
  const correctAnswer = getPrimes(num);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

const getRandomNumber = (number) => Math.floor(Math.random() * number);

export const startPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  getQuestion(getRandomNumber(100));
  if (result === 1) {
    getQuestion(getRandomNumber(100));
  }
  if (result === 2) {
    getQuestion(getRandomNumber(20));
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
