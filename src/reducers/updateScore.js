export function calculateMatchWinner(score) {
  if (score.player1.matchPoints === 2) {
    // player 1 won the set
    return {
      ...score,
      winner: 'player1',
    };
  } else if (score.player2.matchPoints === 2) {
    // player 1 won the set
    return {
      ...score,
      winner: 'player2',
    };
  }
  return score;
}

export function updateMatchPoints(score, setWinner) {
  // reset gamePoints and setPoints
  let updatedScore = {
    ...score,
    player1: {
      ...score.player1,
      gamePoints: 0,
      setPoints: 0,
    },
    player2: {
      ...score.player2,
      gamePoints: 0,
      setPoints: 0,
    },
  };
  // add +1 match point to the winner
  updatedScore = {
    ...updatedScore,
    [setWinner]: {
      ...updatedScore[setWinner],
      matchPoints: updatedScore[setWinner].matchPoints + 1,
    },
  };
  return calculateMatchWinner(updatedScore);
}

export function calculateSetWinner(score) {
  if (score.player1.setPoints === 6) {
    // player 1 won the set
    return updateMatchPoints(score, 'player1');
  } else if (score.player2.setPoints === 6) {
    // player 1 won the set
    return updateMatchPoints(score, 'player2');
  }
  return score;
}

export function updateSetPoints(score, gameWinner) {
  // reset gamePoints
  let updatedScore = {
    ...score,
    player1: {
      ...score.player1,
      gamePoints: 0,
    },
    player2: {
      ...score.player2,
      gamePoints: 0,
    },
  };
  // add +1 set point to the winner
  updatedScore = {
    ...updatedScore,
    [gameWinner]: {
      ...updatedScore[gameWinner],
      setPoints: updatedScore[gameWinner].setPoints + 1,
    },
  };
  return calculateSetWinner(updatedScore);
}

export function calculateGameWinner(score) {
  if (score.player1.gamePoints === 4 && score.player2.gamePoints < 3) {
    // normal win (no tie) for player1
    return updateSetPoints(score, 'player1');
  } else if (score.player2.gamePoints === 4 && score.player1.gamePoints < 3) {
    // normal win (no tie) for player2
    return updateSetPoints(score, 'player2');
  } else if (
    score.player1.gamePoints > 3 &&
    score.player1.gamePoints - score.player2.gamePoints === 2
  ) {
    // player1 wins with 2 points of advantage
    return updateSetPoints(score, 'player1');
  } else if (
    score.player2.gamePoints > 3 &&
    score.player2.gamePoints - score.player1.gamePoints === 2
  ) {
    // player2 wins with 2 points of advantage
    return updateSetPoints(score, 'player2');
  }
  // no winners yet
  return score;
}

export function updateGamePoints(score, playerWhoScored) {
  const updatedScore = {
    ...score,
    [playerWhoScored]: {
      ...score[playerWhoScored],
      gamePoints: score[playerWhoScored].gamePoints + 1,
    },
  };
  return calculateGameWinner(updatedScore);
}

export function updateScore(score, playerWhoScored) {
  const updatedScore = { ...score };
  return updateGamePoints(updatedScore, playerWhoScored);
}

export default updateScore;
