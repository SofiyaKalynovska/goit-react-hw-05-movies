import { MutatingDots } from 'react-loader-spinner';
import { LoadingBox } from './Loading.styled';

export const Loading = () => {
  return (
    <LoadingBox>
      <MutatingDots
        height="100"
        width="100"
        color="#5576a7"
        secondaryColor="#434687"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        margin="auto"
        visible={true}
      />
    </LoadingBox>
  );
};
