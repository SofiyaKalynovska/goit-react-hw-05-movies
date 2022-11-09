import { fetchTrending } from 'components/api';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Title,
  MoviesList,
  MovieItem,
  Poster,
  MovieTitle,
} from './Home.styled';
import { Loading } from 'components/Loading/Loading';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setIsLoading(true);
        const arrOfMovies = await fetchTrending();
        setTrendingMovies([...arrOfMovies.results]);
      } catch (error) {
        toast.error('Something happened with trending movies :(');
      } finally {
        setIsLoading(false);
      }
    }

    getTrendingMovies();
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loading isLoading={isLoading} />}
      <MoviesList>
        {trendingMovies.map(({ id, title, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`movies/${id}`}>
              <MovieTitle>{title}</MovieTitle>
              <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            </Link>
          </MovieItem>
        ))}
      </MoviesList>
      <ToastContainer />
    </>
  );
};
