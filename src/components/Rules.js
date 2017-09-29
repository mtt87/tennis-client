import React from 'react';

const Rules = () => (
  <div className="column is-narrow">
    <h2 className="title is-2">Rules</h2>
    <div className="content">
      <ul>
        <li>
          4 points to win a game <br />
          <small>(with 2 points of advantage if tie)</small>
        </li>
        <li>
          6 games to win a set <br />
          <small>(with 2 points of advantage if tie)</small>
        </li>
        <li>2 out of 3 match to win</li>
      </ul>
    </div>
  </div>
);

export default Rules;
