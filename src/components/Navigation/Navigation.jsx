import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.containerHeader}>
      <header className={css.headerItem}>
        <h1 className={css.mainLogo}>
          <NavLink className={css.logoStyled} to="/">
            TOP MOVIES
          </NavLink>
        </h1>

        <nav>
          <ul className={css.listHeader}>
            <li>
              <NavLink className={css.navLinkHeader} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLinkHeader} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
