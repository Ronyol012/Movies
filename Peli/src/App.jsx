import { useState } from 'react'
import './App.css'
import './Components/Movies/Movie'
import Movie from './Components/Movies/Movie'
import MovieDescript from './Components/MoviesDescript/MovieDescript'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieDescript/>
    </>
  )
}

export default App
