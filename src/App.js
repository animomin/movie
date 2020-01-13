import React from "react";

// react는 자동적으로 class component의 render method를 실행한다.
class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: ++current.count }));
  };

  minus = () => {
    this.setState(current => ({ count: --current.count }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
