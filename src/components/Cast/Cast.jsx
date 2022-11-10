import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/api';
import { Loading } from 'components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import { CastItem, CastList, CastPhoto, CastText } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // if (cast !== []) {
      async function getCast() {
        setIsLoading(true);
        try {
          const castDetails = await fetchMovieCast(movieId);
          setCast(castDetails);
        } catch (error) {
          toast.error('Something went wrong while cast loading! Please try again!');
        } finally {
          setIsLoading(false);
        }
      }
      getCast();
    // }
    // toast.info('Sorry! No info about cast of this movie');
  }, [movieId, cast]);

  return (
    cast.length > 0 && (
      <>
        <CastList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <CastItem key={id}>
              <CastPhoto
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              />
              <CastText>{original_name}</CastText>
              <CastText>Character: {character}</CastText>
            </CastItem>
          ))}
        </CastList>
        {isLoading && <Loading isLoading={isLoading} />}
        <ToastContainer />
      </>
    )
  );
};
