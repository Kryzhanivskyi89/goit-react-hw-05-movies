import React from "react"
import { useState, useEffect } from 'react';
import MovieItems from "components/MovieItems/MovieItems";
import fetchMovies from "components/API/api"


const Home = () => {
    const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchMovies(`/trending/movie/day`)
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
      }, []);
    return <>{movies && <MovieItems movieItems={movies}></MovieItems>}</>;
}
    


export default Home