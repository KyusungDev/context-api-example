import React, { Component } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { EnvProvider } from './contexts/EnvContext';
import { SelectionProvider } from './contexts/SelectionContext';
import Counter from './components/Counter';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

class App extends Component {
  render() {
    return (
      <AppProvider contexts={[EnvProvider, SelectionProvider]}>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
        <Counter />
      </AppProvider>
    );
  }
}

export default App;
