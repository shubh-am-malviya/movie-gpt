import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		topRatedMovies: null,
		upcomingMovies: null,
		currentMovieDetails: null,
		currentMovieTrailerVideo: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addCurrentMovieDetails: (state, action) => {
			state.currentMovieDetails = action.payload;
		},
		removeCurrentMovieDetails: (state) => {
			state.currentMovieDetails = null;
		},
		addCurrentMovieTrailerVideo: (state, action) => {
			state.currentMovieTrailerVideo = action.payload;
		},
		removeCurrentMovieTrailerVideo: (state, action) => {
			state.currentMovieTrailerVideo = null;
		},
	},
});

export const {
	addNowPlayingMovies,
	addTrailerVideo,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
	addCurrentMovieDetails,
	removeCurrentMovieDetails,
	addCurrentMovieTrailerVideo,
	removeCurrentMovieTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
