import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Winner = ({ winner }) => {
  if (winner !== '') {
    return (
      <div className="column">
        <span className="tag is-success is-medium">{winner} is the winner!</span>
      </div>
    );
  }
  return null;
};

Winner.propTypes = {
  winner: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { winner } = state;
  return { winner };
};

export default connect(mapStateToProps)(Winner);
