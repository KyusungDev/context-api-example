import React from 'react';
import { withSelection } from '../contexts/SelectionContext';

const Receives = ({ value }) => {
  return <div>현재 값: {value}</div>;
};

export default withSelection(Receives);
