import {
    ADD_WATCHLIST,
    STRIKE_THRU_WATCHLIST,
    addWatchlist,
    strikeThruWatchlist,
    closeWatchlistItem, CLOSE_WATCHLIST_ITEM,
} from './index';

describe('Watchlist actions', () => {
    describe('addWatchList', () => {
        it('returns type and payload', () => {
            expect(addWatchlist('watchlist test'))
                .toEqual({
                    type: ADD_WATCHLIST,
                    payload: 'watchlist test'
                });
        });
    });

    describe('strikeThruWatchlist', () => {
        it('returns type and payload', () => {
            expect(strikeThruWatchlist(123, true))
                .toEqual({
                    type: STRIKE_THRU_WATCHLIST,
                    payload: {
                        id: 123,
                        isStrikeThru: true,
                    }
                });
        });
    });

    describe('onCloseWatchlistItem', () => {
        it('returns type and payload', () => {
            expect(closeWatchlistItem(123))
                .toEqual({
                    type: CLOSE_WATCHLIST_ITEM,
                    payload: 123
                });
        });
    });
});
