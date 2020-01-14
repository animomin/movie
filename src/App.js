import React from "react";
import axios from "axios";

// react는 자동적으로 class component의 render method를 실행한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // async : 약간의 시간이 걸릴 수 있어!
  getMovies = async () => {
    //             axios를 기다려야해!
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    // data fetching is here
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
