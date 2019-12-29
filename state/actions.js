import {ADD_PLAYER, CLEAR_PLAYERS, SHUFFLE_PLAYERS, INCREMENT_PLAYER_INDEX, PASS_PLAYER} from './constants';

export const addPlayer = (playerData) => (
    {
        type: ADD_PLAYER,
        payload: playerData,
    }
);

export const shufflePlayers = (playerData) => (
    {
        type: SHUFFLE_PLAYERS,
        payload: playerData,
    }
);

export const clearPlayers = () => (
    {
        type: CLEAR_PLAYERS,
    }
);

export const incrementPlayerIndex = () => (
    {
        type: INCREMENT_PLAYER_INDEX,
    }
);

export const passPlayer = (index) => (
    {
        type: PASS_PLAYER,
        payload: index,
    }
);