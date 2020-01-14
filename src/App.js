import React from "react";

// react는 자동적으로 class component의 render method를 실행한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    // data fetching is here
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
