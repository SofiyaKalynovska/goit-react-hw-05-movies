import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/api';

import { ToastContainer, toast } from 'react-toastify';
import { CastItem, CastList, CastPhoto, CastText } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  
  useEffect(() => {
    
      async function getCast() {
        
        try {
          fetchMovieCast(movieId).then(details => {
            setCast(details.cast)
        })
          
        } catch (error) {
          toast.error('Something went wrong while cast loading! Please try again!');
        } 
      }
      getCast();
    // }
  }, [movieId]);

  return (
    cast.length > 0 && (
      <>
        <CastList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <CastItem key={id}>
              <CastPhoto
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLJfKaGbymfs6A97-1Lxqj0DXgzUnLBVBFQ&usqp=CAU `
                }
                alt={original_name}
              />
              <CastText>{original_name}</CastText>
              <CastText>Character: {character}</CastText>
            </CastItem>
          ))}
        </CastList>
        <ToastContainer />
      </>
    )
  );
};
