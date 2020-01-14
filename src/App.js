import React from "react";
import axios from "axios";
import Movie from "./Movie";

// react는 자동적으로 class component의 render method를 실행한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // async : 약간의 시간이 걸릴 수 있어!
  getMovies = async () => {
    //             axios를 기다려야해!
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // data fetching is here
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
