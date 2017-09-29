import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DisplayGames = ({ matchPoints1, matchPoints2 }) => (
  <div className="column">
    <h2 className="title is-2">Games</h2>
    <table className="table is-bordered" style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>Player1</td>
          <td>Player2</td>
        </tr>
        <tr>
          <td>{matchPoints1}</td>
          <td>{matchPoints2}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

DisplayGames.propTypes = {
  matchPoints1: PropTypes.number.isRequired,
  matchPoints2: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const matchPoints1 = state.player1.matchPoints;
  const matchPoints2 = state.player2.matchPoints;
  return { matchPoints1, matchPoints2 };
};

export default connect(mapStateToProps)(DisplayGames);
