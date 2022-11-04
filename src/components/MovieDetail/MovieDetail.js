import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  aysncFetchMoviesorShowDetails,
  removeSelectedMovieOrShow,
} from "../../features/movie/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  // console.log(imdbIMDB);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(aysncFetchMoviesorShowDetails(imdbID));

    //this is basically known as cleanup function.....
    //when we go back or click on other movie so that the previous one get cleaned out of the store..
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating: {data.imdbRating}</span>
              <span>IMDB Votes: {data.imdbVotes}</span>
              <span>Runtime: {data.Runtime}</span>
              <span>Year: {data.Year}</span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
