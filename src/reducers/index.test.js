import reducer, { initialState } from './index';
import { playerScored, resetGame } from '../actions';

it('returns the score if no player scored', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it('reset the score if resetGame is pressed', () => {
  let score = reducer(
    {
      player1: {
        gamePoints: 1,
        setPoints: 2,
        matchPoints: 3,
      },
      player2: {
        gamePoints: 3,
        setPoints: 2,
        matchPoints: 1,
      },
      winner: 'player2',
    },
    {},
  );
  score = reducer(score, resetGame());
  expect(score.player1.gamePoints).toEqual(0);
  expect(score.player2.gamePoints).toEqual(0);
  expect(score.player1.setPoints).toEqual(0);
  expect(score.player2.setPoints).toEqual(0);
  expect(score.player1.matchPoints).toEqual(0);
  expect(score.player2.matchPoints).toEqual(0);
  expect(score.winner).toEqual('');
});

describe('update the game points', () => {
  let score = reducer(undefined, {});
  it('increase by 1 game point if player1 scores', () => {
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(1);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });
  it('increase by 1 game point if player2 scores', () => {
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(1);
    expect(score.player2.gamePoints).toEqual(1);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });
});

describe('update the set points', () => {
  it('increase by 1 set point if player1 wins a game', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          ...initialState.player1,
          gamePoints: 3,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(1);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });

  it('increase by 1 set point if player2 wins a game', () => {
    let score = reducer(
      {
        ...initialState,
        player2: {
          ...initialState.player2,
          gamePoints: 3,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(1);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });

  it('increase by 1 set point if player1 wins a game by 2 points of advantage after tie', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          ...initialState.player1,
          gamePoints: 3,
        },
        player2: {
          ...initialState.player2,
          gamePoints: 3,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(4);
    expect(score.player2.gamePoints).toEqual(3);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(1);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });

  it('increase by 1 set point if player2 wins a game by 2 points of advantage after tie', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          ...initialState.player1,
          gamePoints: 3,
        },
        player2: {
          ...initialState.player2,
          gamePoints: 3,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(3);
    expect(score.player2.gamePoints).toEqual(4);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(1);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });
});

describe('update the match points', () => {
  it('increase by 1 match point if player1 wins 6 sets', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          ...initialState.player1,
          gamePoints: 3,
          setPoints: 5,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(1);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });
});

describe('update the match points', () => {
  it('increase by 1 match point if player2 wins 6 sets', () => {
    let score = reducer(
      {
        ...initialState,
        player2: {
          ...initialState.player2,
          gamePoints: 3,
          setPoints: 5,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(1);
    expect(score.winner).toEqual('');
  });

  it('increase by 1 set point if player1 wins a game by 2 points of advantage after tie', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          ...initialState.player1,
          gamePoints: 3,
          setPoints: 5,
        },
        player2: {
          ...initialState.player2,
          setPoints: 5,
        },
      },
      {},
    );
    // win game
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(6);
    expect(score.player2.setPoints).toEqual(5);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
    // 15-0
    score = reducer(score, playerScored('player1'));
    // 30-0
    score = reducer(score, playerScored('player1'));
    // 40-0
    score = reducer(score, playerScored('player1'));
    // win game
    score = reducer(score, playerScored('player1'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(1);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
  });

  it('increase by 1 set point if player1 wins a game by 2 points of advantage after tie', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          ...initialState.player1,
          setPoints: 5,
        },
        player2: {
          ...initialState.player2,
          gamePoints: 3,
          setPoints: 5,
        },
      },
      {},
    );
    // win game
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(5);
    expect(score.player2.setPoints).toEqual(6);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(0);
    expect(score.winner).toEqual('');
    // 15-0
    score = reducer(score, playerScored('player2'));
    // 30-0
    score = reducer(score, playerScored('player2'));
    // 40-0
    score = reducer(score, playerScored('player2'));
    // win game +1 set
    score = reducer(score, playerScored('player2'));
    expect(score.player1.gamePoints).toEqual(0);
    expect(score.player2.gamePoints).toEqual(0);
    expect(score.player1.setPoints).toEqual(0);
    expect(score.player2.setPoints).toEqual(0);
    expect(score.player1.matchPoints).toEqual(0);
    expect(score.player2.matchPoints).toEqual(1);
    expect(score.winner).toEqual('');
  });
});

describe('update the winner', () => {
  it('returns null when there is not yet a winner', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          gamePoints: 3,
          setPoints: 5,
          matchPoints: 0,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player1'));
    expect(score.winner).toEqual('');
  });
  it('returns the winner player1', () => {
    let score = reducer(
      {
        ...initialState,
        player1: {
          gamePoints: 3,
          setPoints: 5,
          matchPoints: 1,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player1'));
    expect(score.winner).toBe('player1');
  });
  it('returns the winner player1', () => {
    let score = reducer(
      {
        ...initialState,
        player2: {
          gamePoints: 3,
          setPoints: 5,
          matchPoints: 1,
        },
      },
      {},
    );
    score = reducer(score, playerScored('player2'));
    expect(score.winner).toBe('player2');
  });
});
