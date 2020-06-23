import { TOGGLE_DARK_MODE } from '../reducers';
import { SET_SEARCH_VALUE } from '../reducers';
import { SET_DISPLAYED_CITY } from '../reducers';


function toggleDarkMode(e) {
    const action = {
        type: TOGGLE_DARK_MODE,
        payload: e.target.name
    };
    return action;
}

function setSearchValue(val) {
    console.log(val);
    const action = {
        type: SET_SEARCH_VALUE,
        payload: val
    };
    return action;
}

function setDisplayedCity(val) {
    console.log(val);
    const action = {
        type: SET_DISPLAYED_CITY,
        payload: val
    };
    return action;
}

export  {
    toggleDarkMode,
    setSearchValue,
    setDisplayedCity
}