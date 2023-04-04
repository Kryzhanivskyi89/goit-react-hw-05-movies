import React from "react"
import { useParams, Outlet, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import fetchMovies from '../API/api';
import BackButton from "components/BackButton/BackButton";
import Loader from "components/Loader/Loader";
import style from './Moviedetails.module.css';


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
    setShowLoading(true);
    fetchMovies(`movie/${movieId}`)
        .then(data => {
        setMovie(data);
        setShowLoading(false);
        })
        .catch(console.log);
    }, [movieId]);

    if (!movie) {
    return <>{showLoading && <Loader />}</>;
    }
    const {title, name, overview, genres, release_date, first_air_date, poster_path, vote_average} = movie;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const score = vote_average.toFixed(1);

    return (
        <>    
            <BackButton />
            <div className={style.filmInfo}>
                {!poster_path ? (<div className={style.noImage}/>) : (
                    <img
                        src={imgUrl}
                        alt={title || name}
                        width="150"
                        className={style.img}
                    />
                )}
                <div>
                    <h2 className={style.title}>
                        {title || name} ({(first_air_date || release_date).slice(0, 4)})
                    </h2>

                    <p >User Score: {score}/10</p>

                    <h3 className={style.title}>Overview</h3>
                    <p>{overview}</p>

                    <h3 className={style.title}>Genres</h3>
                    <p>{genres.map(({ name }) => name).join(', ')}</p>
                </div>
            </div>
            <div>
                <h2>Addititonal information</h2>
                <Link to="cast" className={style.cast}>
                    Cast
                </Link>
                <Link to="reviews" className={style.reviews}>
                    Reviews
                </Link>
            </div>
            <Outlet />
        </>        
    )
}


export default MovieDetails