import React, { Component } from 'react'

import Card from '../components/Card'

export class PopularBattle extends Component {
    constructor() {
      super()

      this.state = {
          movies: [],
          currentBattle: 0
      }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1977f1d9a7e0ad53259d000fba4af18")
        .then(response => response.json())
        .then(data => this.setState({ movies: data.results }))
        .catch(error => console.error(error))
    }
    
    render() {
    const slicedArray = this.state.movies.slice(0, 2)

    return (
      <div className='container text-center'>
        <h1 className='m-4'>Popular Battle</h1>
        <div className='row gap-3 d-flex justify-content-center'>
          {slicedArray.map(movie => 
            <Card
              key={movie.id} 
              image={movie.poster_path}
              title={movie.title} 
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          )}
        </div>
      </div>
    )
  }
}

export default PopularBattle