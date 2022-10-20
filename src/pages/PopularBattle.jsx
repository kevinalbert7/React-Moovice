import React, { Component } from 'react'

import Card from '../components/Card'

export class PopularBattle extends Component {
    constructor() {
      super()

      this.state = {
          movies: [],
          currentBattle: 0,
          storage: []
      }

      this.addFilm =this.addFilm.bind(this)
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1977f1d9a7e0ad53259d000fba4af18")
        .then(response => response.json())
        .then(data => this.setState({ movies: data.results }))
        .catch(error => console.error(error))
    }

    addFilm(currentBattle, id) {
      const clonedStorage = [...this.state.storage, id]

      this.setState({ 
        currentBattle: currentBattle + 2,
        storage: clonedStorage
      })

      localStorage.setItem("favorites", JSON.stringify(clonedStorage))
    }

    render() {
    const { currentBattle, movies } = this.state

    console.log("storage =>", this.state.storage)

    return (
      <div className='container text-center'>
        <h1 className='m-4'>Popular Battle</h1>
        {currentBattle === 18 ? (
          <>
            Vous avez parcouru tous les films !
          </>
        ) : (
          <>
            <div className='row gap-3 d-flex justify-content-center'>
              {movies.length !== 0 && 
                <>
                  <Card
                    key={movies[currentBattle].id} 
                    image={movies[currentBattle].poster_path}
                    title={movies[currentBattle].title} 
                    releaseDate={movies[currentBattle].release_date}
                    overview={movies[currentBattle].overview}
                    onClick={() => this.addFilm(currentBattle, movies[currentBattle].id)}
                  />
                  <Card
                    key={movies[currentBattle +1].id} 
                    image={movies[currentBattle  + 1].poster_path}
                    title={movies[currentBattle  + 1].title} 
                    releaseDate={movies[currentBattle  + 1].release_date}
                    overview={movies[currentBattle  + 1].overview}
                    onClick={() => this.addFilm(currentBattle, movies[currentBattle].id)}
                  />
                </>
              }
            </div>
          </>
        )}
      </div>
    )
  }
}

export default PopularBattle