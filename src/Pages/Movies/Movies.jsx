import React from "react";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchMovies from '../../components/API/api';
import Searchbar from "components/Searchbar/Searchbar";
import MovieItems from '../../components/MovieItems/MovieItems'
import Loader from "components/Loader/Loader";
import style from '../Home/style.module.css';
 
const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [totalMovie, setTotalMovie] = useState(1);
    const [showLoading, setShowLoading] = useState(false);
    console.log(movies)
    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) return;

        setShowLoading(true);
        setMovies([]); // Очистка стану з порожнім масивом

        fetchMovies(`search/movie`, query, 1) // Передача параметра page
            .then(data => {
                setMovies(data.results);
                setTotalMovie(data.total_results);
                setShowLoading(false);
            })
            .catch(error => {
                console.log(error);
                setShowLoading(false);
            });
    }, [searchParams]);
    
  
    return (
        <>
            <Searchbar
                setSearchParams={setSearchParams}
                searchParams={searchParams}
            />
            
            {showLoading && <Loader />}
            {movies && movies.length !== 0 &&
                <section className={style.movieList}>
                    <MovieItems movieItems={movies} />
                </section>
            }
            {totalMovie === 0 && <div>Not found movies</div>}
        </>        
    )
}


export default Movies