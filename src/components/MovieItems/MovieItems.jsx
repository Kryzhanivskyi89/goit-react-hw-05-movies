import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieItems = ({ movieItems }) => {
  
  const location = useLocation();
  
  return <ul > {movieItems.map(createItem)}</ul>;
  
  function createItem({ id, original_title }) {
    return (
      <li key={id} >
        <Link to={`/movies/${id}`} state={location} >
          {original_title}
        </Link>
      </li>
    );
  }
};

export default MovieItems;