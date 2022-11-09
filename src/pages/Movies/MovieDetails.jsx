import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'components/Loading/Loading';
import { fetchMovieDetails } from 'components/api';
import { ToastContainer, toast } from 'react-toastify';
import {
  InfoSection,
  MovieImg,
  MovieInfo,
  MovieTitle,
  MovieDetailsPartTitle,
  MovieText,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      setIsLoading(true);
      try {
        const details = await fetchMovieDetails(movieId);
        console.log(details);
        setMovieDetails(details);
        setGenres(details.genres);
        setPoster(details.poster_path);
      } catch (error) {
        toast.error('Something went wrong! Please try again!');
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  const genresList = genres && genres.map(genre => genre.name).join(', ');

  const { original_title, overview, vote_average, release_date } = movieDetails;
  return (
    <>
      <InfoSection>
        <MovieImg
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={original_title}
        />
        <MovieInfo>
          <MovieTitle>
            {original_title} ({new Date(release_date).getFullYear()})
          </MovieTitle>
          <MovieText>
            User Score: {Math.ceil((Number(vote_average) * 10))}%
          </MovieText>
          <MovieDetailsPartTitle>Overview</MovieDetailsPartTitle>
          <MovieText>{overview}</MovieText>
          <MovieDetailsPartTitle>Genres</MovieDetailsPartTitle>
          <MovieText>{genresList}</MovieText>
        </MovieInfo>
      </InfoSection>
      {isLoading && <Loading isLoading={isLoading} />}
      <ToastContainer />
    </>
  );
};
