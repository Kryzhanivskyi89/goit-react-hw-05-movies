import React from "react"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import fetchMovies from '../../components/API/api';
import Loader  from 'components/Loader/Loader';
import style from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        setShowLoading(true);
        fetchMovies(`movie/${movieId}/credits`)
        .then(data => {
            setCast(data.cast);
            setShowLoading(false);
        })
        .catch(console.log);
    }, [movieId]);

    if (!cast) {
        return <>{showLoading && <Loader />}</>;
    }

    return (
        <>
        {cast.length > 0 ? (
            <ul className={style.castList}>
            {cast.slice(0, 19).map(({ id, name, character, profile_path }) => (
                <li key={id} className={style.item}>
                {profile_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={name}                    
                        width="264"
                        className={style.img}
                    />
                ) : (
                    <div className={style.imageNotFound}>Image not found</div>
                )}
                <div>
                    <p>
                        <b>{name}</b>
                    </p>
                    <p>
                    Character: <b>{character}</b>
                    </p>
                </div>
                </li>
            ))}
            </ul>
        ) : (
            <div>No casts</div>
        )}
        </>
    );
    };



export default Cast