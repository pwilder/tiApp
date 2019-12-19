import { combineReducers } from 'redux';

const INITIAL_STATE = {
    players: []
};

const players = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default combineReducers({
    players,
});