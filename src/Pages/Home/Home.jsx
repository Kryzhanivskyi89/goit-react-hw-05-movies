import React from "react"
import { useState, useEffect } from 'react';
import MovieItems from "components/MovieItems/MovieItems";
import fetchMovies from "components/API/api"
import style from './style.module.css';

const Home = () => {
  
  const [movies, setMovies] = useState(null);
  
  useEffect(() => {
    fetchMovies(`/trending/movie/day`)
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);
  
  return (
    <>
      <section className={style.hero} >
        <h1 className={style.heroTitle}>
          "Find your favorite movies quickly and easily"
        </h1>
        <p className={style.heroDesc}>Discover new films and access detailed information including ratings, cast, and more. Enjoy exploring the best movies anytime? anywhere!</p>

      </section>

      {movies &&
        <section className={style.movieList}>
          <h2 className={style.movieListTitle}>Trending today:</h2>
          <MovieItems movieItems={movies}></MovieItems>
        </section>
      }
    </>
  )
}
    


export default Home