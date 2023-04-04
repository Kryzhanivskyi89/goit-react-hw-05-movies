import { Routes, Route } from "react-router-dom";
// import { lazy } from 'react';
import Home from "../Pages/Home/Home";
import MovieDetails from "./MovieDetails/MovieDetails";
import Movies from "../Pages/Movies/Movies";
import Layout from "./Layout/Layout";
import Cast from './Cast/Cast'
import Reviews from './Reviews/Reviews'


const App = () => {
  
  return (
    <>      
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>                     
        </Route>        
      </Routes>
    </>
  );
};


export default App