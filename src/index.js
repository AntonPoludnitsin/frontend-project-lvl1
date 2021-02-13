import { startEvenGame } from './games/brain-even.js';
import { startCalcGame } from './games/brain-calc.js';
import { startGcdGame } from './games/brain-gcd.js';
import { startProgressionGame } from './games/brain-progression.js';
import { startPrimeGame } from './games/brain-prime.js';

export default (title) => {
  if (title === 'even') {
    startEvenGame();
  }
  if (title === 'calc') {
    startCalcGame();
  }
  if (title === 'gcd') {
    startGcdGame();
  }
  if (title === 'progression') {
    startProgressionGame();
  }
  if (title === 'prime') {
    startPrimeGame();
  }
};
