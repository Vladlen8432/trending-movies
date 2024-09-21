import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../services/api";

export const useFetchByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const onHandleSubmit = (value) => {
    setSearchParams({ q: value });
  };

  return { movies, isLoading, error, onHandleSubmit };
};
