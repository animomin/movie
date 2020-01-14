import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

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
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
