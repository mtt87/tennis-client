import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const DisplaySets = ({ setPoints1, setPoints2 }) => (
  <div className="column">
    <h2 className="title is-2">Sets</h2>
    <table className="table is-bordered" style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>Player1</td>
          <td>Player2</td>
        </tr>
        <tr>
          <td>{setPoints1}</td>
          <td>{setPoints2}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

DisplaySets.propTypes = {
  setPoints1: PropTypes.number.isRequired,
  setPoints2: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const setPoints1 = state.player1.setPoints;
  const setPoints2 = state.player2.setPoints;
  return { setPoints1, setPoints2 };
};

export default connect(mapStateToProps)(DisplaySets);
