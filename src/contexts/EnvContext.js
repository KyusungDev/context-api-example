import React, { Component, createContext } from 'react';
import createUseConsumer from './createUseConsumer';

const Context = createContext();
const { Provider, Consumer: EnvConsumer } = Context;

class EnvProvider extends Component {
  state = {
    number: 1
  };
  actions = {
    increment: () => {
      this.setState(({ number }) => ({ number: number + 1 }));
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// HOC
// const withEnv = WrappedComponent => props => (
//   <EnvConsumer>
//     {({ state, actions }) => (
//       <WrappedComponent number={state.number} increment={actions.increment} />
//     )}
//   </EnvConsumer>
// );

// HOC를 다른 HOC로 랩핑
const withEnv = createUseConsumer(EnvConsumer);

export { EnvProvider, EnvConsumer, withEnv };
