import { fetchTrending } from 'components/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from './Home.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const arrOfMovies = await fetchTrending();
        setTrendingMovies([...arrOfMovies.results]);
      } catch (error) {
        toast.error('Something happened with trending movies :(');
      }
    }

    getTrendingMovies();
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <List
        listToRender={trendingMovies}
        addedPath={'movies/'}
        state={{ from: location }}
      />
      <ToastContainer />
    </>
  );
};
export default Home;
