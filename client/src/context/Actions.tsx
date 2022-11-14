export enum ActionTypes {
	TEST = "TEST",
	FETCH_INITIAL_DATA = "FETCH_INITIAL_DATA",
	FETCH_TRENDING_DATA = "FETCH_TRENDING_DATA",
	UPDATE_FILTER_SEARCH = "UPDATE_FILTER_SEARCH",
	TOGGLE_LOADING = "TOGGLE_LOADING",
	FETCH_WEEK_TRENDING = "FETCH_WEEK_TRENDING",
	FETCH_TRENDING_PEOPLE = "FETCH_TRENDING_PEOPLE",
	FETCH_TOP_RATED_MOVIES = "FETCH_TOP_RATED_MOVIES",
	FETCH_TOP_UPCOMING = "FETCH_TOP_UPCOMING",
	UPDATE_TRENDING_PEOPLE = "UPDATE_TRENDING_PEOPLE",
	UPDATE_WEEK_TRENDING = "UPDATE_WEEK_TRENDING",
	UPDATE_TOP_RATED_MOVIES = "UPDATE_TOP_RATED_MOVIES",
	UPDATE_TOP_UPCOMING = "UPDATE_TOP_UPCOMING",
	FETCH_MOVIES_PLAYING_NOW = "FETCH_MOVIES_PLAYING_NOW",
	UPDATE_MOVIES_PLAYING_NOW = "UPDATE_MOVIES_PLAYING_NOW",
	FETCH_ALL_MOVIES_GENRES = "FETCH_ALL_MOVIES_GENRES",
	FETCH_SINGLE_MOVIE = "FETCH_SINGLE_MOVIE",
	FETCH_CAST_MOVIE = "FETCH_CAST_MOVIE",
	UPDATE_SINGLE_MOVIE_ID = "UPDATE_SINGLE_MOVIE_ID",
	FETCH_SINGLE_RECOMMENDED_MOVIES = "FETCH_SINGLE_RECOMMENDED_MOVIES",
	FETCH_SINGLE_PERSON_DATA = "FETCH_SINGLE_PERSON_DATA",
	DISPLAY_USER_MODAL = "DISPLAY_USER_MODAL",
	INIT_USER = "INIT_USER",
	LOGOUT_USER = "LOGOUT_USER",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: any;
}

export interface Genres {
	genres: Genre[];
}

export interface Genre {
	id: number;
	name: string;
}
