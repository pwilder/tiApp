import {ADD_PLAYER, CLEAR_PLAYERS, SHUFFLE_PLAYERS} from './constants';

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