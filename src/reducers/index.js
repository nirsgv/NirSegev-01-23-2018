import { combineReducers } from 'redux';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_DISPLAYED_CITY = 'SET_DISPLAYED_CITY';


const initialAppState = {
    isDarkMode: false,
    searchVal: 'Tel-aviv',
    mainCityDisplayKey: 223
};

function appData(state = initialAppState, action) {
    switch (action.type) {

        case TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            };

        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchVal: action.payload
            };

        case SET_DISPLAYED_CITY:
            return {
                ...state,
                mainCityDisplayKey: action.payload
            };

        default:
            return state
    }
}

const rootReducer = combineReducers({
    appData
});

export default rootReducer;