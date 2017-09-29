import React from 'react';
import PropTypes from 'prop-types';

const POINT_STRING = {
  0: '0',
  1: '15',
  2: '30',
  3: '40',
};

const Points = ({ value }) => {
  if (value > 3) {
    return <span>{POINT_STRING[3]}</span>;
  }
  return <span>{POINT_STRING[value]}</span>;
};

Points.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Points;
