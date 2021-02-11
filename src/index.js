import { startEvenGame } from './games/brain-even.js';
import { startCalcGame } from './games/brain-calc.js';

export const startGame = (title) => {
  if (title === 'even') {
    startEvenGame();
  }
  if (title === 'calc') {
    startCalcGame();
  }
};
