import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
	name: "gptSearch",
	initialState: {
		showGptSearch: false,
		movieNames: null,
		movieResults: null,
	},
	reducers: {
		toggleGptSearchView: (state) => {
			state.showGptSearch = !state.showGptSearch;
		},
		addGptMovieResults: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
		clearGptMovieResults: (state) => {
			state.movieNames = null;
			state.movieResults = null;
		},
	},
});

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults } =
	gptSearchSlice.actions;

export default gptSearchSlice.reducer;
