import {
  NavLink,
  useParams,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../services/api";
import css from "./movieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const previousLocation = useRef(location.state?.from || "/");

  useEffect(() => {
    if (location.state?.from) {
      previousLocation.current = location.state.from;
    }

    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId, location.state]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.containerMovieDetails}>
      <Link className={css.goBackLink} to={previousLocation.current}>
        Go back
      </Link>
      {movieDetails ? (
        <div className={css.movieDetailsItem}>
          <h2 className={css.headerMovieDetails}>{movieDetails.title}</h2>
          <div className={css.movieDetailsContent}>
            <div className={css.containerMovieDetailsImg}>
              <img
                className={css.movieDetailsImg}
                src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>

            <div className={css.containerMovieDetailsInfo}>
              <p>{movieDetails.overview}</p>
              <p>Release Date: {movieDetails.release_date}</p>
              <p>Vote Average: {movieDetails.vote_average}</p>
              <p>Runtime: {movieDetails.runtime} minutes</p>
            </div>
          </div>

          <div>
            <ul className={css.nestedRouteList}>
              <li>
                <NavLink
                  className={css.nestedRouteLink}
                  to={`/movies/${movieId}/cast`}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={css.nestedRouteLink}
                  to={`/movies/${movieId}/reviews`}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
