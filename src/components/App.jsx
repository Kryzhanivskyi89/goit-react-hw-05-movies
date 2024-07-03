import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
const Error = lazy(()=> import ( './Error/Error'));

const App = () => {
  const Movies = lazy(() => import('../Pages/Movies/Movies'));
  const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));
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
          <Route path="*" element={<Error />} />
        </Route>        
      </Routes>
    </>
  );
};


export default App