import React, { Component } from "react";
import moment from "moment";

import Card from "../components/Card";

export class Weekly extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    let today = moment().format("YYYY-MM-DD");
    let lastWeek = moment().subtract(1, "weeks").format("YYYY-MM-DD");

    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=e1977f1d9a7e0ad53259d000fba4af18`
    )
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="m-4">Weekly</h1>
        <p className="fs-4 mb-4">Discover the selection of films of the week</p>
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

export default Weekly;
