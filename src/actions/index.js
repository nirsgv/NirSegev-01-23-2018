import { TOGGLE_IS_FAHRENHEIT } from '../reducers';
import { TOGGLE_DARK_MODE } from '../reducers';
import { SET_SEARCH_VALUE } from '../reducers';
import { SET_DISPLAYED_CITY } from '../reducers';
import { TOGGLE_FAV_CITY } from '../reducers';
import { RESET_SEARCH } from '../reducers';


function toggleFavCity(cityKey, favCities) {

    const currentFav = favCities.includes(cityKey)
        ? favCities.filter(item => item !== cityKey)
        : cityKey
            ? favCities.concat(cityKey)
            : favCities;

    localStorage.setItem("weather-spa", JSON.stringify(currentFav));

    const action = {
        type: TOGGLE_FAV_CITY,
        payload: currentFav
    };
    return action;
}

function toggleIsFahrenheit() {
    const action = {
        type: TOGGLE_IS_FAHRENHEIT,
    };
    return action;
}

function toggleDarkMode() {
    const action = {
        type: TOGGLE_DARK_MODE,
    };
    return action;
}

function setSearchValue(val) {
    const action = {
        type: SET_SEARCH_VALUE,
        payload: val
    };
    return action;
}

function setDisplayedCity(val) {
    const action = {
        type: SET_DISPLAYED_CITY,
        payload: val
    };
    return action;
}

function resetSearch() {
    const action = {
        type: RESET_SEARCH,
    };
    return action;
}

export  {
    toggleFavCity,
    toggleDarkMode,
    toggleIsFahrenheit,
    setSearchValue,
    setDisplayedCity,
    resetSearch
}