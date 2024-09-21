import { Link, useLocation } from "react-router-dom";
import css from "./moviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.containerMoviesList}>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, name, original_title, poster_path }) => (
          <li className={css.moviesListItem} key={id}>
            <Link
              className={css.movieTitleLink}
              state={location}
              key={id}
              to={`/movies/${id}`}
            >
              <img
                className={css.movieImg}
                src={
                  (poster_path = `https://image.tmdb.org/t/p/w300/${poster_path}`)
                }
                alt={title || name || original_title}
              />
              <h2 className={css.movieTitle}>
                {title || name || original_title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
