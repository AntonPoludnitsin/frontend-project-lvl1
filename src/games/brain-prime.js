import getRandomNumber from '../utils/random.js';

function getCorrectAnswer(num) {
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

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndCorrectNumber = () => {
  const number = getRandomNumber(100);
  const correctAnswer = getCorrectAnswer(number);
  const question = number.toString();
  return { question, correctAnswer };
};

export default { description, getQuestionAndCorrectNumber };
