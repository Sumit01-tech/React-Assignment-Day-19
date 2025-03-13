import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_SEARCH_TERM } from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: null,
    searchTerm: "",
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        default:
            return state;
    }
};
