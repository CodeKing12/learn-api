import { useEffect, useState } from 'react'
import './App.css'
import MediaCard from './components/Media'
import { axiosInstance } from './axiosInstance'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axiosInstance.get("/api/media/filter/v2/news", {
      params: {
        type: "movie",
        sort: "dateAdded",
        order: "desc",
        days: 365,
        access_token: "F4fdEDXKgsw7z3TxzSjaDpp3O"
      }
    })
    .then((response) => {
      console.log(response.data.hits.hits)
      setMovies(response.data.hits.hits)
    })
    .catch((error) => {
      console.error("An error occured", error)
    })
  }, [])

  return (
    <div className="grid grid-cols-7">
      {
        movies && movies.length ? movies.map((movie, index) => <MediaCard key={index} movie={movie} />) : ""
      }
    </div>
  )
}

export default App
