import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movie/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const movieSearch = "harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${movieSearch}&type=movie`)
        .catch((err) => {
          console.warn(err);
        });
      console.log("Response API", response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
