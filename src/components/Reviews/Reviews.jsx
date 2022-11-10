import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'components/api';
import { ToastContainer, toast } from 'react-toastify';

import {
  ReviewsList,
  ReviewsItem,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        fetchMovieReviews(movieId).then(reviews => {
          setMovieReviews(reviews.results);
        });
      } catch (error) {
        toast.error(
          'Something went wrong while reviews loading! Please try again!'
        );
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      <ReviewsList>
        {movieReviews.length > 0
          ? movieReviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <ReviewAuthor>Author: {author}</ReviewAuthor>
                <ReviewText>{content}</ReviewText>
              </ReviewsItem>
            ))
          : 'We don`t have any reviews for this movie.'}

        <ToastContainer />
      </ReviewsList>
    </>
  );
};
export default Reviews;
