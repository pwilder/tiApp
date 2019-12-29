import { combineReducers } from 'redux';
import { ADD_PLAYER, SHUFFLE_PLAYERS, CLEAR_PLAYERS, INCREMENT_PLAYER_INDEX, PASS_PLAYER } from './constants';
import { cloneDeep } from 'lodash';
import findNextIndex from '../common/findNextIndex';
import bestContrast from "get-best-contrast-color";

//Dummy State for testing
// const INITIAL_STATE = {
//     players: [
//         {
//             key: `item-cats`,
//             label: 'cats',
//             backgroundColor: `#FF0000`,
//             textColor: '#000000',
//         },
//         {
//             key: `item-dogs`,
//             label: 'dogs',
//             backgroundColor: `#0000FF`,
//             textColor: '#000000',
//         }
//
//     ],
//     currentPlayerIndex: 0
// };

const INITIAL_STATE = {
    players: [],
    currentPlayerIndex: 0
};

const playerData = (state = INITIAL_STATE, action) => {
    let newState;
    switch (action.type) {
        case ADD_PLAYER: {
            newState = cloneDeep(state);
            newState.players.push(action.payload);
            break;
        }
        case SHUFFLE_PLAYERS: {
            newState = cloneDeep(state);
            newState.players = action.payload.map(item => ({ ...item, passed: false}));
            newState.currentPlayerIndex = 0;
            break;
        }
        case CLEAR_PLAYERS: {
            newState = cloneDeep(state);
            newState.players = [];
            newState.currentPlayerIndex = 0;
            break;
        }
        case INCREMENT_PLAYER_INDEX: {
            newState = cloneDeep(state);
            newState.currentPlayerIndex = findNextIndex(newState.players, newState.currentPlayerIndex);
            break;
        }
        case PASS_PLAYER: {
            newState = cloneDeep(state);
            newState.players[action.payload].passed = !newState.players[action.payload].passed;
            break;
        }
        default:
            newState = state
    }

    console.log(`Updated state: ${JSON.stringify(newState)}`);
    return newState;
};

export default combineReducers({
    playerData,
});