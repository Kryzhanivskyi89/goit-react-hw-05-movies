import React from "react";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import fetchMovies from '../../components/API/api';
import Searchbar from "components/Searchbar/Searchbar";
import MovieItems from '../../components/MovieItems/MovieItems'
import Loader from "components/Loader/Loader";

 
const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [totalMovie, setTotalMovie] = useState(1);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        if (!searchParams.get('query')) return;
        setShowLoading(true);
        setMovies(null);

        fetchMovies(`search/movie`, searchParams.get('query'))
            .then(data => {
                setMovies(data.results);
                setTotalMovie(data.total_results);
                setShowLoading(false);
            })
            .catch(console.log);
  }, [searchParams]);
    
  
    return (
        <>
            <Searchbar
                setSearchParams={setSearchParams}
                searchParams={searchParams}
            />
            
            {showLoading && <Loader />}
            {movies && movies.length !== 0 && <MovieItems movieItems={movies} />}
            {totalMovie === 0 && <div>Not found movies</div>}
        </>        
    )
}

Movies.propTypes = {
    handleSearch: PropTypes.func
};


export default Movies