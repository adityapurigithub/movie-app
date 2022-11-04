import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
const initialState = {
  movies: {},
  series: {},
  selectedMovieOrShow: {},
};

const movieSearch = "harry";
// createAsyncThunk("slice_name/function_name",()=>{})
export const aysncFetchMovies = createAsyncThunk(
  "movies/aysncFetchMovies",
  async () => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${movieSearch}&type=movie`
    );

    console.log("Response API", response);
    return response.data;
  }
);

//for series..
const seriesSearch = "money";
// createAsyncThunk("slice_name/function_name",()=>{})
export const aysncFetchSeries = createAsyncThunk(
  "movies/aysncFetchSeries",
  async () => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${seriesSearch}&type=series`
    );

    console.log("Response API", response);
    return response.data;
  }
);

//for details...
export const aysncFetchMoviesorShowDetails = createAsyncThunk(
  "movies/aysncFetchMoviesorShowDetails",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    console.log("Response API", response);
    return response.data;
  }
);
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, action) => {
    //   state.movies = action.payload;
    // },
    removeSelectedMovieOrShow: (state, action) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    //here these action creators will define the lifecycle of the async req...
    [aysncFetchMovies.pending]: () => {
      console.log("pending");
    },

    [aysncFetchMovies.fulfilled]: (state, action) => {
      console.log("fetched");
      return { ...state, movies: action.payload };
    },

    [aysncFetchMovies.rejected]: () => {
      console.log("rejected");
    },
    //  adding series-action creator only for  fullfilled req.
    [aysncFetchSeries.fulfilled]: (state, action) => {
      console.log("fetched");
      return { ...state, series: action.payload };
    },
    [aysncFetchMoviesorShowDetails.fulfilled]: (state, action) => {
      console.log("fetched");
      console.log(action.payload);
      return { ...state, selectedMovieOrShow: action.payload };
    },
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
