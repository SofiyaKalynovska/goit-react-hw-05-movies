import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Movies.styled';
import { List } from 'components/MoviesList/MoviesList';
import { ReactComponent as SearchIcon } from '../../icons/SearchIcon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'components/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieToSearch.trim() === '') {
      return;
    }
    async function getSearchMovies() {
      try {
        const arrOfMovies = await fetchSearchMovie(movieToSearch);

        if (arrOfMovies.results.length === 0) {
          toast.info('Sorry, we did not find any images:( Try another word');
          return;
        }
        setMovies([...arrOfMovies.results]);
      } catch (error) {
        toast.error('Something went wrong! Please try again!');
      }
    }
    getSearchMovies();
  }, [movieToSearch]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const queryToSearch = form.elements.query.value;

    if (queryToSearch === '' || searchParams.get('query') === queryToSearch) {
      toast.error('Please provide new word for search');
      form.reset();
      return;
    }
    setMovies([]);
    setSearchParams({ query: queryToSearch });
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          name="query"
          placeholder="Provide search query"
        />
        <SearchFormBtn type="submit">
          <SearchIcon />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
      </SearchForm>
      {!!movies.length && (
        <List listToRender={movies} addedPath={''} state={{ from: location }} />
      )}
      <ToastContainer />
    </>
  );
};
export default Movies;
