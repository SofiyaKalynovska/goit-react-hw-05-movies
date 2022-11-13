import { Routes, Route, Navigate } from "react-router-dom"
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy, Suspense } from "react";
import { Loading } from "./Loading/Loading";

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

      </Routes>
    </Suspense>
  );
};
