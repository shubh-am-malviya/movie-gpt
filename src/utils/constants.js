export const LOGO_IMG_URL =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR_IMG_URL =
	"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const TMDB_API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTVlNjFmMmMzMmFhZGQ1MWVkNzAwMjI0NzU2YmEyNiIsInN1YiI6IjY1MGQ4MjEzYjViYzIxMDEyY2NhN2QwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xyitl__mSanWcNxTFEWiQ7cgbswpKqnI2zlEB693qzI",
	},
};

export const TMDB_MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w200/";

export const BG_IMG_URL =
	"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";

export const SUPPORTED_LANG = [
	{ identifier: "en", name: "English" },
	{ identifier: "hindi", name: "हिंदी" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
