import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "components/api";
import { ToastContainer, toast } from 'react-toastify';
import { Loading } from 'components/Loading/Loading';
import {
  ReviewsList,
  ReviewsItem,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieReviews() {
      setIsLoading(true);
      try {
        await fetchMovieReviews(movieId).then(reviews =>
          setMovieReviews(reviews.results)
        );
      } catch (error) {
        toast.error(
          'Something went wrong while reviews loading! Please try again!'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [movieReviews, movieId]);

  return (
    <ReviewsList>
      {movieReviews !== []
        ? movieReviews.map(({ id, author, content}) => (
            <ReviewsItem key={id}>
              <ReviewAuthor>Author: {author}</ReviewAuthor>
              <ReviewText>{content}</ReviewText>
            </ReviewsItem>
          ))
        : 'We don`t have any reviews for this movie.'}
      {isLoading && <Loading isLoading={isLoading} />}
      <ToastContainer />
    </ReviewsList>
  );
};


