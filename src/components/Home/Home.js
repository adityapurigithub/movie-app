import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addMovies,
  aysncFetchMovies,
  aysncFetchSeries,
} from "../../features/movie/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aysncFetchMovies());

    //also now dispatching series -action
    dispatch(aysncFetchSeries());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
