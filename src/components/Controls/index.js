import React from 'react';
import BtnPlayerScored from './BtnPlayerScored';
import BtnResetGame from './BtnResetGame';

const Controls = () => (
  <div className="column">
    <div className="field is-grouped">
      <BtnPlayerScored player="player1" />
      <BtnPlayerScored player="player2" />
      <BtnResetGame />
    </div>
  </div>
);

export default Controls;
