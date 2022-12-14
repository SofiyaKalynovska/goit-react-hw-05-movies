import { MoviesList, MovieItem, MovieTitle, Poster } from './MoviesList.styled';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const List = ({ listToRender, addedPath }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {listToRender.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`${addedPath}${id}`} state={{ from: location }}>
            <MovieTitle>{title}</MovieTitle>
            <Poster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : `http://m.mooeraudio.com/public/img/no-img.svg`
              }
            />
          </Link>
        </MovieItem>
      ))}
    </MoviesList>
  );
};
List.propTypes = {
  listToRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
  addedPath: PropTypes.string.isRequired,
};
