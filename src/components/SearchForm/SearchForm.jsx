import { useState } from "react";
import css from "./searchForm.module.css";

const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return alert("Cannot be empty");
    }
    onHandleSubmit(query);
  };
  return (
    <div className={css.containerForm}>
      <form className={css.formItem} onSubmit={handleSubmit} action="">
        <input
          className={css.inputForm}
          type="text"
          value={query}
          name="query"
          onChange={handleChange}
        />
        <button className={css.formButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
