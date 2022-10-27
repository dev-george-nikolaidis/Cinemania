export enum ActionTypes {
	TEST = "TEST",
	FETCH_INITIAL_DATA = "FETCH_INITIAL_DATA",
	UPDATE_FILTER_SEARCH = "UPDATE_FILTER_SEARCH",
	TOGGLE_LOADING = "TOGGLE_LOADING",
	FETCH_WEEK_TRENDING = "FETCH_WEEK_TRENDING",
	FETCH_TRENDING_PEOPLE = "FETCH_TRENDING_PEOPLE",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: any;
}
