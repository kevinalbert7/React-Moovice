import React, { Component } from 'react'
import moment from 'moment'

import Card from '../components/Card'

export class Weekly extends Component {
  constructor() {
    super()

    this.state = {
        movies: []
    }
  }

  componentDidMount() {
    let today = moment().format("YYYY-MM-DD")
    let lastWeek = moment().subtract(1, 'weeks').format("YYYY-MM-DD")

    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=e1977f1d9a7e0ad53259d000fba4af18`)
    .then(response => response.json())
    .then(data => this.setState({ movies: data.results }))
    .catch(error => console.error(error))
    console.log("today =>", today)
    console.log("last week =>", moment().subtract(1, 'weeks').format('YYYY-MM-DD'))
  }
  
  render() {
    console.log("movies =>", this.state.movies)
    return (
      <div className='container text-center py-5'>
        <h1 className='mb-5'>Weekly</h1>
        <div className='row gap-3 d-flex justify-content-center'>
          {this.state.movies.map(movie => 
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


export default Weekly