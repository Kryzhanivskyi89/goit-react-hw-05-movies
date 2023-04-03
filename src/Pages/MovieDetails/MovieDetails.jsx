import React from "react"
import { useParams, Outlet, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import fetchMovies from '../../components/API/api';
import BackButton from "components/BackButton/BackButton";
import Loader from "components/Loader/Loader";


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
    const {
        title,
        name,
        overview,
        genres,
        release_date,
        first_air_date,
        poster_path,
        vote_average,
    } = movie;

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const userScore = vote_average.toFixed(1);

    return (
        <>    
            <BackButton />
            <div>
                {!poster_path ? (<div />) : (
                    <img
                        src={imgUrl}
                        alt={title || name}
                        width="150"                    
                    />
                )}
                <div>
                    <h2 >
                        {title || name} ({(first_air_date || release_date).slice(0, 4)})
                    </h2>

                    <p >User Score: {userScore}/10</p>

                    <h3>Overview</h3>
                    <p>{overview}</p>

                    <h3>Genres</h3>
                    <p>{genres.map(({ name }) => name).join(', ')}</p>
                </div>
            </div>
            <div>
                <h2>Addititonal information</h2>
                <Link to="cast" >
                    Cast
                </Link>
                <Link to="reviews" >
                    Reviews
                </Link>
            </div>
            <Outlet />
        </>        
    )
}


export default MovieDetails