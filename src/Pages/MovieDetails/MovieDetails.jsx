import React from "react"
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";


const MovieDetails = ({backdrop_path, poster_path, title, vote_count, overview, genre_ids}) => {
    return (
        <li
            // onClick={openModal}
            // className={style.ImageGalleryItem}
        >                
            <img src={poster_path} alt={backdrop_path } />
            <h2>{title}</h2>
            <p>{vote_count}</p>
            <h3>Overvier</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genre_ids}</p>
            <h3>Additional information</h3>
            <Cast />
            <Reviews />
        </li>        
    )
}


export default MovieDetails