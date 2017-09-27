export const PLAYER_SCORED = 'PLAYER_SCORED';
export const RESET_GAME = 'RESET_GAME';

export function playerScored(player) {
  return {
    type: PLAYER_SCORED,
    payload: player,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}
