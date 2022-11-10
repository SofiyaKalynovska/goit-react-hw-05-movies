import { Outlet } from 'react-router-dom';
import { Container, Link, Navigation } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
      <Outlet />
    </Container>
  );
};
