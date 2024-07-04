import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Movieitems.module.css'


const MovieItems = ({ movieItems }) => {
  
  const location = useLocation();
  
  return (
    <ul className={style.list}>
      {movieItems.map(({ id, original_title, poster_path, vote_average }) =>{
        return (
          <li key={id} className={style.movieItem}>
            <Link to={`/movies/${id}`} state={location} className={style.link}>
              <img
                className={style.movieImg}
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={original_title}
                width="264px"
                height="384px"
              />
                <p className={style.movieTitle}>{original_title}</p>
                <p className={style.movieScore}>User Scrore: {Math.round(vote_average * 10)}%</p>
            
            </Link>
          </li>
        );
      })}
    </ul>
  )

};

export default MovieItems;