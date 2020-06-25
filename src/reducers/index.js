import { combineReducers } from 'redux';
export const TOGGLE_FAV_CITY = 'TOGGLE_FAV_CITY';
export const TOGGLE_IS_FAHRENHEIT = 'TOGGLE_IS_FAHRENHEIT';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_DISPLAYED_CITY = 'SET_DISPLAYED_CITY';


const checkLocal = () => {
    const localData = localStorage.getItem("weather-spa");
    return localData ? JSON.parse(localData) : []
};

const initialAppState = {
    isDarkMode: false,
    isFahrenheit: false,
    searchVal: '',
    // mainCityDisplayKey: 1162619,
    mainCityDisplayKey: 215854,
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

        default:
            return state
    }
}

const rootReducer = combineReducers({
    appData
});

export default rootReducer;