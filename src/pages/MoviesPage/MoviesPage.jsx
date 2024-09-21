import MoviesList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useFetchByQuery } from "../../hooks/useFetchByQuery";

const MoviesPage = () => {
  const { movies, isLoading, error, onHandleSubmit } = useFetchByQuery();
  return (
    <>
      <SearchForm onHandleSubmit={onHandleSubmit} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
