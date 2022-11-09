import { fetchTrending } from 'components/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Title } from './Home.styled';
import { Loading } from 'components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List } from 'components/MoviesList/MoviesList';

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
      <List listToRender={trendingMovies} addedPath={'movies/'} />
      <ToastContainer />
    </>
  );
};
