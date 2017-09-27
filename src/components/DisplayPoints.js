import React from 'react';
import PropTypes from 'prop-types';

const DisplayPoints = ({ score1, score2 }) => (
  <div className="column">
    <h2 className="title is-2">Points</h2>
    <table className="table is-bordered" style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>Player1</td>
          <td>Player2</td>
        </tr>
        <tr>
          <td>{score1}</td>
          <td>{score2}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

DisplayPoints.propTypes = {
  score1: PropTypes.number,
  score2: PropTypes.number,
};

DisplayPoints.defaultProps = {
  score1: 0,
  score2: 0,
};

export default DisplayPoints;
