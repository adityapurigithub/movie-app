import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
const initialState = {
  movies: {},
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
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
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
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
