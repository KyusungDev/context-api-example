import React, { Component } from 'react';
import { withSelection } from '../contexts/SelectionContext';

class Sends extends Component {
  state = {
    input: ''
  };

  componentDidMount() {
    this.setState({
      input: this.props.value
    });
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setValue(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    );
  }
}

// // :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
// const SendsContainer = () => (
//   <SelectConsumer>
//     {({ state, actions }) => (
//       <Sends value={state.value} setValue={actions.setValue} />
//     )}
//   </SelectConsumer>
// );

// // :: Sends 대신에 SendsContainer 를 내보내줌
// export default SendsContainer;

/* 위 코드를 HOC로 대체 */
export default withSelection(Sends);
