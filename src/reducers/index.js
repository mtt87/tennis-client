import { updateScore } from './updateScore';
import { PLAYER_SCORED, RESET_GAME } from '../actions';

export const initialState = {
  player1: {
    gamePoints: 0,
    setPoints: 0,
    matchPoints: 0,
  },
  player2: {
    gamePoints: 0,
    setPoints: 0,
    matchPoints: 0,
  },
  winner: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_SCORED: {
      const playerWhoScored = action.payload;
      return Object.assign({}, updateScore(state, playerWhoScored));
    }
    case RESET_GAME:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
