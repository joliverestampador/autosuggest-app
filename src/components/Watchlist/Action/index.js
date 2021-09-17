export const ADD_WATCHLIST = 'ADD_WATCHLIST';
export const STRIKE_THRU_WATCHLIST = 'STRIKE_THRU_WATCHLIST';
export const CLOSE_WATCHLIST_ITEM = 'CLOSE_WATCHLIST_ITEM';

export const addWatchlist = (watchlist = {}) => ({
    type: ADD_WATCHLIST,
    payload: watchlist,
});

export const strikeThruWatchlist = (id, isStrikeThru) => ({
    type: STRIKE_THRU_WATCHLIST,
    payload: {id, isStrikeThru},
});

export const closeWatchlistItem = (id) => ({
    type: CLOSE_WATCHLIST_ITEM,
    payload: id,
});
