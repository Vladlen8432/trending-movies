// import { NavLink } from "react-router-dom";

import { useFetchTrending } from "../../hooks/useFetchTrending";
import MoviesList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const { movies, isLoading, error } = useFetchTrending();

  return (
    <div>
      {isLoading && (
        <div>
          {/* <Loader /> */}
          Loader
        </div>
      )}
      {error && <p>Something went wrong</p>}
      {isLoading === false && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Home page</h1>
//       <NavLink to="/movies/:movieId">
//         <p> Some Movie</p>
//       </NavLink>
//     </div>
//   );
// };

// export default HomePage;
