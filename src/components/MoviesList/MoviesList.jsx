import { MoviesList, MovieItem, MovieTitle, Poster } from './MoviesList.styled'
import { Link } from 'react-router-dom';

export const List = ({ listToRender }) => {
  return (
    <MoviesList>
  {listToRender.map(({ id, title, poster_path }) => (
    <MovieItem key={id}>
      <Link to={`movies/${id}`}>
        <MovieTitle>{title}</MovieTitle>
        <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      </Link>
    </MovieItem>
  ))}
</MoviesList>
  )
}

