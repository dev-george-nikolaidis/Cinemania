import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./GeneralContext";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.TEST:
			return { ...state };
		case ActionTypes.FETCH_INITIAL_DATA:
			return {
				...state,
				allData: action.payload.allData,
				movies: action.payload.moviesArray,
				series: action.payload.seriesArray,
				favMovies: action.payload.favMovies,
				favSeries: action.payload.favSeries,
			};
		case ActionTypes.INIT_USER:
			return {
				...state,
				// @ts-ignore
				user: JSON.parse(localStorage.getItem("user")),
			};
		case ActionTypes.LOGOUT_USER:
			return {
				...state,
				user: null,
			};
		case ActionTypes.FETCH_TRENDING_DATA:
			return {
				...state,
				trending_movies_series: action.payload,
			};
		case ActionTypes.FETCH_SINGLE_PERSON_DATA:
			return {
				...state,
				person_bio: action.payload[0],
				person_known_for: action.payload[1],
				person_socials: action.payload[2],
			};
		case ActionTypes.FETCH_CURRENT_MOVIES_BY_GENRE:
			return {
				...state,
				current_movies_by_genre: action.payload,
			};
		case ActionTypes.FETCH_BOOKMARKS:
			return {
				...state,
				bookmark_remove: false,
				bookmarks: action.payload,
			};
		case ActionTypes.TOGGLE_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case ActionTypes.REMOVE_BOOKMARK_MOVIE:
			return {
				...state,
				bookmark_remove: true,
			};
		case ActionTypes.CHANGE_CURRENT_GENRE_ID:
			return {
				...state,
				genre_id: action.payload,
			};
		case ActionTypes.UPDATE_CURRENT_GENRE_ID:
			return {
				...state,
				genre_id: action.payload,
			};
		case ActionTypes.FETCH_GENRE:
			return {
				...state,
				genre: action.payload,
			};
		case ActionTypes.DISPLAY_USER_MODAL:
			return {
				...state,
				display_user_modal: action.payload,
			};
		case ActionTypes.FETCH_WEEK_TRENDING:
			return {
				...state,
				week_trending: action.payload,
			};
		case ActionTypes.FETCH_MOVIES_PLAYING_NOW:
			return {
				...state,
				movies_playing_now: action.payload,
			};
		case ActionTypes.UPDATE_MOVIES_PLAYING_NOW:
			return {
				...state,
				movies_playing_now_page: action.payload,
			};
		case ActionTypes.UPDATE_WEEK_TRENDING:
			return {
				...state,
				week_trending_page: action.payload,
			};
		case ActionTypes.UPDATE_CURRENT_MOVIES_BY_GENRE:
			return {
				...state,
				current_genre_movie_page: action.payload,
			};
		case ActionTypes.FETCH_TRENDING_PEOPLE:
			return {
				...state,
				trending_people: action.payload,
			};
		case ActionTypes.UPDATE_TRENDING_PEOPLE:
			return {
				...state,
				actors_page: action.payload,
			};
		case ActionTypes.FETCH_CAST_MOVIE:
			return {
				...state,
				movie_cast: action.payload,
			};
		case ActionTypes.FETCH_TOP_RATED_MOVIES:
			return {
				...state,
				top_rated_movies: action.payload,
			};
		case ActionTypes.UPDATE_TOP_RATED_MOVIES:
			return {
				...state,
				top_rated_page: action.payload,
			};
		case ActionTypes.FETCH_TOP_UPCOMING:
			return {
				...state,
				upcoming_movies: action.payload,
			};
		case ActionTypes.UPDATE_TOP_UPCOMING:
			return {
				...state,
				top_upcoming_page: action.payload,
			};
		case ActionTypes.FETCH_ALL_MOVIES_GENRES:
			return {
				...state,
				movies_genres: action.payload,
			};
		case ActionTypes.FETCH_SINGLE_MOVIE:
			return {
				...state,
				single_movie: action.payload.single_movie,
				movie_cast: action.payload.cast,
				single_movie_id: action.payload.single_movie.id,
				single_recommended_movies: action.payload.similar_movies_data,
			};
		case ActionTypes.FETCH_SINGLE_RECOMMENDED_MOVIES:
			return {
				...state,
				single_recommended_movies: action.payload,
			};
		case ActionTypes.UPDATE_SINGLE_MOVIE_ID:
			return {
				...state,
				single_movie_id: action.payload,
			};

		case ActionTypes.UPDATE_FILTER_SEARCH:
			if (action.payload.searchPath === "movies") {
				return {
					...state,
					searchFilter: action.payload.searchValue,
				};
			}
			if (action.payload.searchPath === "series") {
				return {
					...state,
					searchFilter: action.payload.searchValue,
				};
			}
			if (action.payload.searchPath === "bookmarked") {
				return {
					...state,
					bookmarkedFilter: action.payload.searchValue,
				};
			}
			// default home search
			return {
				...state,
				homeFilter: action.payload.searchValue,
			};

		default:
			return state;
	}
};
