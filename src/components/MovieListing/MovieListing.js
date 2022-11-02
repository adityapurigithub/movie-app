import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector((state) => state.movies);
  console.log(movies.Search);
  let renderedMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard data={movie} />;
      })
    ) : (
      <>
        <div className="movie-err">
          <h2>{movies.error}</h2>
        </div>
      </>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderedMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
