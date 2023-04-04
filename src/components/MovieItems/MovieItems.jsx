import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Movieitems.module.css'


const MovieItems = ({ movieItems }) => {
  
  const location = useLocation();
  
  return <ul className={style.list}> {movieItems.map(createItem)}</ul>;
  
  function createItem({ id, original_title }) {
    return (
      <li key={id} className={style.item}>
        <Link to={`/movies/${id}`} state={location} className={style.link}>
          {original_title}
        </Link>
      </li>
    );
  }
};

export default MovieItems;