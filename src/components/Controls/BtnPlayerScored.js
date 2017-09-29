import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { playerScored } from '../../actions';

export const BtnPlayerScored = ({ onClickScored, player }) => (
  <p className="control">
    <button className="button is-info" onClick={() => onClickScored(player)}>
      {player} scored
    </button>
  </p>
);

BtnPlayerScored.propTypes = {
  onClickScored: PropTypes.func.isRequired,
  player: PropTypes.string.isRequired,
};

export default connect(null, {
  onClickScored: playerScored,
})(BtnPlayerScored);
