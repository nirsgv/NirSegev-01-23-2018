import { combineReducers } from 'redux';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';


const initialAppState = {
    isDarkMode: false,
};

function appData(state = initialAppState, action) {
    switch (action.type) {

        case TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            };

        default:
            return {
                state
            }
    }

}

const rootReducer = combineReducers({
    appData
});

export default rootReducer;