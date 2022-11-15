import React, { Component } from "react";

import Card from "../components/Card";

export class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };

    this.getStorage = this.getStorage.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.state.favIDs.forEach(id => {
      fetch(this.getMovie(id))
        .then(response => response.json())
        .then(result =>
          this.setState({ movies: [...this.state.movies, result] })
        );
    });
  }

  getStorage() {
    const favorite = localStorage.getItem("favorites");
    const arrayFavorites = JSON.parse(favorite);
    if (!arrayFavorites) {
      return [];
    }
    return arrayFavorites;
  }

  getMovie(id) {
    const getMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=e1977f1d9a7e0ad53259d000fba4af18`;
    return getMovie;
  }

  render() {

    // console.log(this.state.movies)
    console.log("favIds:", this.state.favIDs)

    return (
      <div className="container text-center">
        <h1 className="m-4">Favorites</h1>
        <div className="row gap-3 d-flex justify-content-center">
          {this.state.movies.map(movie => {
            return (
              <Card
                key={movie.id}
                movieTitle={movie.title}
                movieOverview={movie.overview}
                movieReleaseDate={movie.release_date}
                moviePosterPath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Favorites;
