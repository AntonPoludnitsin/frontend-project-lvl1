import readlineSync from 'readline-sync';

const roundCount = 2;
const welcomeText = 'Welcome to the Brain Games!';

export default (game) => {
  const { description, getQuestionAndCorrectNumber } = game;
  console.log(welcomeText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i <= roundCount; i += 1) {
    const data = getQuestionAndCorrectNumber();
    const { question, correctAnswer } = data;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
