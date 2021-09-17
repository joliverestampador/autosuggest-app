import axios from 'axios'
import {TV_MAZE} from '../../../constants';

export const ADD_WATCHLIST = 'ADD_WATCHLIST';
// export const SUCCEED_ADD_WATCHLIST = 'SUCCEED_ADD_WATCHLIST';
// export const FAILED_ADD_WATCHLIST = 'FAILED_ADD_WATCHLIST';

export const addWatchlist = (watchlist = {}) => ({
    type: ADD_WATCHLIST,
    payload: watchlist,
});
