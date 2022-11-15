import React, { Component } from "react";
import moment from "moment";

import Card from "../components/Card";

export class WeeklyBattle extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      currentBattle: 0,
      storage: [],
    };

    this.addFilm = this.addFilm.bind(this);
  }

  componentDidMount() {
    let today = moment().format("YYYY-MM-DD");
    let lastWeek = moment().subtract(1, "weeks").format("YYYY-MM-DD");

    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=e1977f1d9a7e0ad53259d000fba4af18`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }))
      .catch((error) => console.error(error));
  }

  addFilm(currentBattle, id) {
    const clonedStorage = [...this.state.storage, id];

    this.setState({
      currentBattle: currentBattle + 2,
      storage: clonedStorage,
    });

    localStorage.setItem("favorites", JSON.stringify(clonedStorage));
  }

  render() {
    const { currentBattle, movies } = this.state;

    console.log("storage :", this.state.storage)

    return (
      <div className="container text-center">
        <h1 className="m-4">Weekly Battle</h1>
        <p className="fs-4 mb-4">For each pair of films released this week, choose your favorite</p>
        {currentBattle === 18 ? (
          <>Vous avez parcouru tous les films !</>
        ) : (
          <>
            <div className="row gap-3 d-flex justify-content-center">
              {movies.length !== 0 && (
                <>
                  <Card
                    key={movies[currentBattle].id}
                    image={movies[currentBattle].poster_path}
                    title={movies[currentBattle].title}
                    releaseDate={movies[currentBattle].release_date}
                    overview={movies[currentBattle].overview}
                    onClick={() =>
                      this.addFilm(currentBattle, movies[currentBattle].id)
                    }
                  />
                  <Card
                    key={movies[currentBattle + 1].id}
                    image={movies[currentBattle + 1].poster_path}
                    title={movies[currentBattle + 1].title}
                    releaseDate={movies[currentBattle + 1].release_date}
                    overview={movies[currentBattle + 1].overview}
                    onClick={() =>
                      this.addFilm(currentBattle, movies[currentBattle].id)
                    }
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default WeeklyBattle;
