import React, { Component } from 'react'

import Card from '../components/Card'

export class Favorites extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      favIDs: this.getStorage()
    }

    this.getStorage =this.getStorage.bind(this)
    this.getMovie =this.getMovie.bind(this)
  }

  componentDidMount() {
    this.state.favIDs.forEach(id => {
      fetch(this.getMovie(id))
        .then(response => response.json())
        .then(result => this.setState({movie: [...this.state.movies, result] }))
    })
  }

  getStorage() {
    const favorite = localStorage.getItem("favorites")
    const arrayFavorite = JSON.parse(favorite)
    if (!arrayFavorite) {
      return []
    }
    return arrayFavorite
  }

  getMovie(id) {
    const movie = `https://api.themoviedb.org/3/movie/${id}?api_key=e1977f1d9a7e0ad53259d000fba4af18`
    return movie
    // this.setState({ movies: [...this.state.movies, movie]})
    // console.log("movies =>", this.state.movies)
  }

  render() {

    console.log("favIDs =>" , this.state.favIDs)
    console.log("movies =>" , this.state.movies)
    return (
      <div className="container">
        <h1>Favorite</h1>
        <div className="row">
          {this.state.movies.map(movie => {
            return (
              <Card 
                key={movie.id} 
                movieTitle={movie.title} 
                movieOverview={movie.overview} 
                movieReleaseDate={movie.release_date}
                moviePosterPath={movie.poster_path}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Favorites