import { TOGGLE_DARK_MODE } from '../reducers';


function toggleDarkMode(e) {
    const action = {
        type: TOGGLE_DARK_MODE,
        payload: e.target.name
    };
    return action;
}

export  {
    toggleDarkMode,
}