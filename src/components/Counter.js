import React from 'react';
import { withEnv } from '../contexts/EnvContext';

const Counter = ({ number, increment }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>더하기</button>
    </div>
  );
};

export default withEnv(({ state, actions }) => ({
  number: state.number,
  increment: actions.increment
}))(Counter);
