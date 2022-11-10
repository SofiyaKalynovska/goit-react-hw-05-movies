import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation} from 'react-router-dom';
import { fetchMovieDetails } from 'components/api';
import { ToastContainer, toast } from 'react-toastify';
import {
  InfoSection,
  MovieImg,
  MovieInfo,
  MovieTitle,
  MovieDetailsPartTitle,
  MovieText,
  AdditionalInfoTitle,
  AdditionalInfoLink,
  AdditionalInfoLinkItem,
} from './MovieDetails.styled';
import { Loading } from 'components/Loading/Loading';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  
  useEffect(() => {
    async function getDetails() {
      try {
        await fetchMovieDetails(movieId).then(details => {
          setMovieDetails(details);
          setGenres(details.genres);
          setPoster(details.poster_path);
        });
      } catch (error) {
        toast.error('Something went wrong! Please try again!');
      }
    }
    getDetails();
  }, [movieId]);

  const genresList = genres && genres.map(genre => genre.name).join(', ');

  const { original_title, overview, vote_average, release_date } = movieDetails;
  return (
    <>
      <AdditionalInfoLink to={backLinkHref}>Go back</AdditionalInfoLink>
      <InfoSection>
        <MovieImg
          src={
            !poster
              ? `http://m.mooeraudio.com/public/img/no-img.svg`
              : `https://image.tmdb.org/t/p/w500/${poster}`
          }
          alt={original_title}
        />
        <MovieInfo>
          <MovieTitle>
            {original_title} ({new Date(release_date).getFullYear()})
          </MovieTitle>
          <MovieText>
            User Score: {Math.ceil(Number(vote_average) * 10)}%
          </MovieText>
          <MovieDetailsPartTitle>Overview</MovieDetailsPartTitle>
          <MovieText>{overview}</MovieText>
          <MovieDetailsPartTitle>Genres</MovieDetailsPartTitle>
          <MovieText>{genresList}</MovieText>
        </MovieInfo>
      </InfoSection>
      <div>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <ul>
          <AdditionalInfoLinkItem>
            <AdditionalInfoLink to="cast" state={location.state}>
              Cast
            </AdditionalInfoLink>
          </AdditionalInfoLinkItem>
          <AdditionalInfoLinkItem>
            <AdditionalInfoLink to="reviews" state={location.state}>
              Reviews
            </AdditionalInfoLink>
          </AdditionalInfoLinkItem>
        </ul>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <ToastContainer />
    </>
  );
};
export default MovieDetails;