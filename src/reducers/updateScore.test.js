import { updateScore } from './updateScore';
import { initialScore } from './index';

it('returns the score if no player scored', () => {
  expect(updateScore(initialScore)).toEqual(initialScore);
});

describe('update the game points', () => {
  let score = initialScore;
  it('increase by 1 game point if player1 scores', () => {
    score = updateScore(score, 'player1');
    expect(score.player1.gamePoints).toEqual(1);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.winner).toBeNull();
  });
  it('increase by 1 game point if player2 scores', () => {
    score = updateScore(score, 'player2');
    expect(score.player1.gamePoints).toEqual(1);
    expect(score.player2.gamePoints).toEqual(1);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.winner).toBeNull();
  });
});

describe('update the set points', () => {
  it('increase by 1 set point if player wins a game', () => {
    let score = {
      ...initialScore,
      player1: {
        ...initialScore.player1,
        gamePoints: 4,
      },
    };
    score = updateScore(score, 'player1');
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(1);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.winner).toBeNull();
  });

  it('increase by 1 set point if player wins a game by 2 points of advantage after tie', () => {
    let score = {
      ...initialScore,
      player1: {
        ...initialScore.player1,
        gamePoints: 4,
      },
      player2: {
        ...initialScore.player2,
        gamePoints: 4,
      },
    };
    score = updateScore(score, 'player1');
    expect(score.player1.gamePoints).toEqual(5);
    expect(score.player2.gamePoints).toEqual(4);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.winner).toBeNull();
    score = updateScore(score, 'player1');
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(1);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.winner).toBeNull();
  });
});

describe('update the match points', () => {
  it('increase by 1 set point if player wins a game', () => {
    let score = {
      ...initialScore,
      player1: {
        ...initialScore.player1,
        gamePoints: 4,
        setPoints: 5,
      },
    };
    score = updateScore(score, 'player1');
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(1);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toBeNull();
  });
});

describe('update the match points', () => {
  it('increase by 1 set point if player wins a game', () => {
    let score = {
      ...initialScore,
      player1: {
        ...initialScore.player1,
        gamePoints: 4,
        setPoints: 5,
      },
    };
    score = updateScore(score, 'player1');
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(1);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toBeNull();
  });
});

describe('update the winner', () => {
  it('returns null when there is not yet a winner', () => {
    let score = {
      ...initialScore,
      player1: {
        gamePoints: 4,
        setPoints: 5,
        matchPoints: 0,
      },
    };
    score = updateScore(score, 'player1');
    expect(score.winner).toBeNull();
  });
  it('returns the winner', () => {
    let score = {
      ...initialScore,
      player1: {
        gamePoints: 4,
        setPoints: 5,
        matchPoints: 1,
      },
    };
    score = updateScore(score, 'player1');
    expect(score.winner).toBe('player1');
  });
});
