import React from "react"
import { Outlet } from "react-router-dom"


const Home = () => {

// const API_KEY = 'f1f839cdf74a86a5131b1ff774a00522'
    // function fetchMovies() {
    //     fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    //         .then(response => response.json())
    //         .then(results => {
    //             if (!results.total) {
    //                 return Notiflix.Notify.failure('Sorry, there are no images to your search. Please try again');
    //             }                    
    //             setImages(prevState => [...prevState, ...image.hits]);                                        
    //             setTotalImages(prevState => image.total);                    
    //         })
    //         .catch(error => error)
    //         .finally(() => {
    //             setIsLoading(false) ;
    //         });
    //     }

    return (
        <>            
            <div>Home</div> 
            <Outlet/>
        </>
        
    )
}
    


export default Home