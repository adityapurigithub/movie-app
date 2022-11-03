import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { aysncFetchMoviesorShowDetails } from "../../features/movie/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  // console.log(imdbIMDB);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(aysncFetchMoviesorShowDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>IMDB Rating{data.imdbRating} ★</span>
          <span>IMDB Votes{data.imdbVotes}</span>
          <span>Runtime {data.imdbRuntime} ★</span>
          <span>Year {data.imdbYear} ★</span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actor}</span>
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
        <div className="right">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
