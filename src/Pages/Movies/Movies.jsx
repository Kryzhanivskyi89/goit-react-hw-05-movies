import React from "react"
import { useState } from 'react'
import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom"
// import MovieDetails from "../MovieDetails/MovieDetails";
import style from './styles.module.css'


// const API_KEY = 'f1f839cdf74a86a5131b1ff774a00522'  
const Movies = ({handleSearch}) => {

    const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue( e.target.value )		
	}
	
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(value);
    };

    // function searchMovies() {
    //         fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
    //             .then(response => response.json())
                // .then(image => {
                //     if (!image.total) {
                //         return Notiflix.Notify.failure('Sorry, there are no images to your search. Please try again');
                //     }                    
                //     setImages(prevState => [...prevState, ...image.hits]);                                        
                //     setTotalImages(prevState => image.total);                    
                // })
                // .catch(error => error)
                // .finally(() => {
                    // setIsLoading(false) ;
        //         });
        // return (
        //     <ul>
                // {/* {movies.map((movie) => {
                //     return <li>
                //     {movie}
                //     </li>
                // }
                // )} */}
    //         </ul>
    //     )
    // }

    return (
        <div className={style.searchbar}>            
            <form className={style.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={style.SearchformButton}>
                    <span className={style.searchform__button__label}>Search</span>
                </button>
                <input
                    className={style.searchform__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleChange}
                    value={value}
                />
            </form>            		
            <Outlet/>
            {/* <MovieDetails /> */}
        </div>
    )
}

Movies.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};


export default Movies