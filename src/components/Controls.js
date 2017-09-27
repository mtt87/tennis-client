import React from 'react';
import PropTypes from 'prop-types';

const test = () => {
  fetch('/api')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

const Controls = () => (
  <div className="field is-grouped">
    <p className="control">
      <button className="button is-primary">Player 1 scored</button>
    </p>
    <p className="control">
      <button className="button is-primary">Player 2 scored</button>
    </p>
    <p className="control">
      <button onClick={() => test()} className="button">
        Reset game
      </button>
    </p>
  </div>
);

export default Controls;
