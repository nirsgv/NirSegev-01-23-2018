import { combineReducers } from 'redux';
import { checkLocal, isItEveningYet } from "../helpers";
export const TOGGLE_FAV_CITY = 'TOGGLE_FAV_CITY';
export const TOGGLE_IS_FAHRENHEIT = 'TOGGLE_IS_FAHRENHEIT';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_DISPLAYED_CITY = 'SET_DISPLAYED_CITY';
export const RESET_SEARCH = 'RESET_SEARCH';


const initialAppState = {
    isFahrenheit: false,
    searchVal: '',
    mainCityDisplayKey: '215854',
    isDarkMode: isItEveningYet(),
    favCities: checkLocal(),
};

function appData(state = initialAppState, action) {
    switch (action.type) {

        case TOGGLE_IS_FAHRENHEIT:
            return {
                ...state,
                isFahrenheit: !state.isFahrenheit
            };

        case TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            };

        case TOGGLE_FAV_CITY:
            return {
                ...state,
                favCities: action.payload
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

        case RESET_SEARCH:
            return {
                ...state,
                searchVal: '',
            };

        default:
            return state
    }
}

const rootReducer = combineReducers({
    appData
});

export default rootReducer;