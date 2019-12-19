import { combineReducers } from 'redux';
import { ADD_PLAYER, SHUFFLE_PLAYERS, CLEAR_PLAYERS } from './constants';
import { cloneDeep } from 'lodash';

const INITIAL_STATE = {
    players: [],
    currentPlayerIndex: 0
};

const players = (state = INITIAL_STATE, action) => {
    let newState;
    switch (action.type) {
        case ADD_PLAYER: {
            newState = cloneDeep(state);
            newState.players.push(action.payload);
            break;
        }
        case SHUFFLE_PLAYERS: {
            newState = cloneDeep(state);
            newState.players = action.payload;
            break;
        }
        case CLEAR_PLAYERS: {
            newState = cloneDeep(state);
            newState.players = [];
            newState.currentPlayerIndex = 0;
            break;
        }
        default:
            newState = state
    }

    console.log(`Updated state: ${JSON.stringify(newState)}`);
    return newState;
};

export default combineReducers({
    players,
});