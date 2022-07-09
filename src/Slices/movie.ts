import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../Interface/movie";
import movieAPI from "../Services/movieAPI";

interface State {
    movies: Movie[];
    isLoading: boolean;
    error: string | null;
}

const initialState: State = {
    movies: [],
    isLoading: false,
    error: null,
};

// thunk actions
export const getMovieShowing = createAsyncThunk(
    "movie/getMovieShowing",
    async () => {
        try {
            const movies = await movieAPI.getMovieShowing();
            return movies;
        } catch (error) {
            throw error;
        }
    },
);

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovieShowing.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMovieShowing.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.movies = payload;
        });
    },
});

export default movieSlice.reducer;
