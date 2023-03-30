import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import Home from "../Pages/Home/Home";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Movies from "../Pages/Movies/Movies";
import Layout from "./Layout/Layout";

const API_KEY = 'f1f839cdf74a86a5131b1ff774a00522'  
// https://developers.themoviedb.org/3/trending/get-trending
// https://developers.themoviedb.org/3/search/search-movies
// https://developers.themoviedb.org/3/movies/get-movie-details
// https://developers.themoviedb.org/3/movies/get-movie-reviews

// `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
// `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
// `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
// `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`
// `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`


const App = () => {
  const [searchText, setSearchText] = useState ('')
  const handleSearch = text => {        
        if (text !== searchText) {
        // setPage(1);
        // setImages([]);
        setSearchText(text);       
        };               
    };
  function fetchMovies() {
            fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
                .then(response => response.json())
                // .then(image => {
                //     if (!image.total) {
                //         return Notiflix.Notify.failure('Sorry, there are no images to your search. Please try again');
                //     }                    
                //     setImages(prevState => [...prevState, ...image.hits]);                                        
                //     setTotalImages(prevState => image.total);                    
                // })
                .catch(error => error)
                .finally(() => {
                    // setIsLoading(false) ;
                });
        }

  
  return (
    <div>      
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies handleSearch={handleSearch}/>} >
            <Route path=":movieId" element={<MovieDetails />}></Route>
          </Route>           
        </Route>        
      </Routes>
    </div>
  );
};


export default App