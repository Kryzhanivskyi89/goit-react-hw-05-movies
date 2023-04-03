import React from "react"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import fetchMovies from '../../components/API/api';
import Loader from "components/Loader/Loader";


const Reviews = () => {
    const [review, setReview] = useState(null);
    const { movieId } = useParams();
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        setShowLoading(true);
        fetchMovies(`movie/${movieId}/reviews`)
        .then(data => {
            setReview(data.results);
            setShowLoading(false);
        })
        .catch(console.log);
    }, [movieId]);

    if (!review) {
        return <>{showLoading && <Loader />}</>;
    }

    return (
        <>
        {review.length > 0 ? (
            <ul >
            {review.map(({ id, author, content }) => (
                <li key={id} >
                Author: <b>{author}</b>
                <p>{content}</p>
                </li>
            ))}
            </ul>
        ) : (
            <div>Reviews not found</div>
        )}
        </>
    );
}


export default Reviews