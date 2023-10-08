import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANG } from "../utils/constants";

const appConfigSlice = createSlice({
	name: "appConfig",
	initialState: {
		lang: SUPPORTED_LANG[0].identifier, // "en"
	},
	reducers: {
		changeLanguage: (state, action) => {
			state.lang = action.payload;
		},
	},
});

export const { changeLanguage } = appConfigSlice.actions;

export default appConfigSlice.reducer;
