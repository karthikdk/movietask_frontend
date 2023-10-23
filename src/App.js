import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavbarComponent'
import {Routes, Route } from 'react-router-dom'
import MovieCreation from './components/MovieCreation'
import MovieListing from './components/MovieListing'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<MovieListing/>}></Route>
          <Route path='/create' element={<MovieCreation/>}></Route>
          <Route path='/movie-details/:movieId' element={<MovieDetails/>}></Route>
        </Routes>
    </div>
  ) 
}

export default App

