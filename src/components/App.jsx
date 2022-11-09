import { Routes, Route } from "react-router-dom"
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<About />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
};
