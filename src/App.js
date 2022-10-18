import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './pages/Home'
import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Favorites from './pages/Favorites'
import Error404 from './pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <ul className="nav d-flex justify-content-around bg-dark">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weekly">Weekly</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weekly-battle">Weekly Battle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/popular">Popular</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/popular-battle">Popular Battle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/favorites">Favorites</Link></li>
          </ul>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/weekly' element={<Weekly />}/>
            <Route path='/weekly-battle' element={<WeeklyBattle />}/>
            <Route path='/popular' element={<Popular />}/>
            <Route path='/popular-battle' element={<PopularBattle />}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </BrowserRouter>
      )
  }
}

export default App