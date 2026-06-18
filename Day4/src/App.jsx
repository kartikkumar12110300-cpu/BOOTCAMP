import React from 'react'
import Parent from './Parent'
import MovieProvider from './MoviesProvider'
import MovieList from './MovieList'



const App = () => {
  return (
    <>
    <div>
      <Parent />
    
    
      <MovieProvider>
        <MovieList />
      </MovieProvider>
    </div>
    </>
  )
}

export default App