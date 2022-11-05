import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addMovies,
  aysncFetchMovies,
  aysncFetchSeries,
} from "../../features/movie/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const movieText = "Harry";
  const showText = "heist";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aysncFetchMovies(movieText));

    //also now dispatching series -action
    dispatch(aysncFetchSeries(showText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
