import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './movieCard'
// import MoviePlayer from './moviePlayer'

// 21629047
const apiUrl = "http://www.omdbapi.com/?apikey=21629047&"
// const apiUrl = "https://vidsrc.to/vapi/movie/new"

const movie1 = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${apiUrl}s=${title}`)
    const data = await res.json()
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("batman");
  }, [])

  return (
    //top bar
    <>
      <div className='text-center flex justify-between fle p-6 bg-zinc-900'>
        <h1 className='text-5xl text-white flex'>Movie App</h1>
        <div className=' text-xl flex bg-zinc-800 rounded-3xl items-center pl-5'>
          <input className=' focus:outline-none font-bold text-white bg-zinc-800' type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              e.key == 'Enter' ? searchMovies(search) : null
            }}
          />

          <img src="src/assets/search.png" alt="search" className='m-3 w-7 h-7'
            onClick={() => {
              searchMovies(search)
            }} />
        </div>
      </div>

      {
        movies.length > 0 ? (
          <div className='grid grid-flow-row gap-8 text-neutral-600 p-4
           sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
            {movies.map((movie) => (
              <MovieCard className="flex" movie1={movie}></MovieCard>
            ))}
          </div>
        )
          : (
            <div><h2>No results found</h2></div>
          )
      }

    </>


  )
}

export default App
