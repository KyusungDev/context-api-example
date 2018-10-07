import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: SelectionConsumer } = Context;

class SelectionProvider extends Component {
  state = {
    value: '기본값1'
  };

  actions = {
    setValue: value => {
      this.setState({ value });
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// HOC
const withSelection = WrappedComponent => props => (
  <SelectionConsumer>
    {({ state, actions }) => (
      <WrappedComponent value={state.value} setValue={actions.setValue} />
    )}
  </SelectionConsumer>
);

export { SelectionProvider, SelectionConsumer, withSelection };
