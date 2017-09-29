import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetGame } from '../../actions';

export const BtnResetGame = ({ onClickReset }) => (
  <p className="control">
    <button className="button" onClick={() => onClickReset()}>
      Reset game
    </button>
  </p>
);

BtnResetGame.propTypes = {
  onClickReset: PropTypes.func.isRequired,
};

export default connect(null, {
  onClickReset: resetGame,
})(BtnResetGame);
