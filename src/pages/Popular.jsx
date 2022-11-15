import React, { Component } from "react";

import Card from "../components/Card";

export class Popular extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1977f1d9a7e0ad53259d000fba4af18"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="m-4">Popular</h1>
        <p className="fs-4 mb-4">Browse the most popular movies of the moment</p>
        <div className="row gap-3 d-flex justify-content-center">
          {this.state.movies.map(movie => (
            <Card
              key={movie.id}
              image={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Popular;
