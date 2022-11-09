import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Movies.styled';
import {
  MoviesList,
  MovieItem,
  MovieTitle,
  Poster,
} from 'pages/Home/Home.styled';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../icons/SearchIcon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'components/api';
import { Loading } from 'components/Loading/Loading';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieToSearch.trim() === '') {
      return;
    }
    async function getSearchMovies() {
      setIsLoading(true);
      try {
        const arrOfMovies = await fetchSearchMovie(movieToSearch);

        if (arrOfMovies.results.length === 0) {
          toast.info('Sorry, we did not find any images:( Try another word');
          return;
        }
        setMovies([...arrOfMovies.results]);
      } catch (error) {
        toast.error('Something went wrong! Please try again!');
      } finally {
        setIsLoading(false);
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
    form.reset();
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
        <MoviesList>
          {movies.map(({ id, title, poster_path }) => (
            <MovieItem key={id}>
              <Link to={`movies/${id}`}>
                <MovieTitle>{title}</MovieTitle>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                />
              </Link>
            </MovieItem>
          ))}
        </MoviesList>
      )}
      {isLoading && <Loading isLoading={isLoading} />}
      <ToastContainer />
    </>
  );
};
