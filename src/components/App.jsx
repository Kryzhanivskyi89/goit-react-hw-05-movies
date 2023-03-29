// import Home from "./Home/Home";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Movies from "./Movies/Movies";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

const API_KEY = 'f1f839cdf74a86a5131b1ff774a00522'  
// https://developers.themoviedb.org/3/trending/get-trending
// https://developers.themoviedb.org/3/search/search-movies
// https://developers.themoviedb.org/3/movies/get-movie-details
// https://developers.themoviedb.org/3/movies/get-movie-reviews

`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
`https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`
`https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`


const App = () => {
  function fetchmovies() {
            fetch(`https://www.themoviedb.org/`)
                .then(response => response.json())
                .then(image => {
                    if (!image.total) {
                        return Notiflix.Notify.failure('Sorry, there are no images to your search. Please try again');
                    }                    
                    setImages(prevState => [...prevState, ...image.hits]);                                        
                    setTotalImages(prevState => image.total);                    
                })
                .catch(error => error)
                .finally(() => {
                    setIsLoading(false) ;
                });
        }

  
  return (
    <div>
      <Home/>
      <Movies />
      <MovieDetails />
      <Cast />
      <Reviews />
      
    </div>
  );
};


export default App