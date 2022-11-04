import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector((state) => state.movies);
  const series = useSelector((state) => state.series);
  let renderedMovies,
    renderedSeries = "";
  // movies to be rendered
  renderedMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard data={movie} />;
      })
    ) : (
      <>
        <div className="movie-err">
          <h2>{movies.Error}</h2>
        </div>
      </>
    );

  // shows to be rendered
  renderedSeries =
    series.Response === "True" ? (
      series.Search.map((series, index) => {
        return <MovieCard data={series} />;
      })
    ) : (
      <>
        <div className="movie-err">
          <h2>{series.Error}</h2>
        </div>
      </>
    );
  return (
    <div className="movie-wrapper">
      {Object.keys(movies || series).length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">{renderedMovies}</div>
          </div>
          <div className="show-list">
            <h2>Shows</h2>
            <div className="show-container">{renderedSeries}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
