import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  aysncFetchMovies,
  aysncFetchSeries,
} from "../../features/movie/movieSlice";
import "./Header.scss";
const Header = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    if (query === "") {
      return alert("Please Enter A Movie Name");
    }
    dispatch(aysncFetchMovies(query));
    dispatch(aysncFetchSeries(query));
    setQuery("");
  };

  return (
    <div className="header">
      <Link to="/home">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            placeholder="Search For a Movie"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="user-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt="user-img"
        />
      </div>
    </div>
  );
};

export default Header;
