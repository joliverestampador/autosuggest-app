import watchlistReducer from './index';
import {ADD_WATCHLIST, CLOSE_WATCHLIST_ITEM, STRIKE_THRU_WATCHLIST} from '../Action';

describe('watchlistReducer', () => {
    it('returns initial state', () => {
        expect(watchlistReducer()).toEqual({
            list: [],
        });
    });

    describe('action types', () => {
        describe('ADD_WATCHLIST', () => {
            it('pushes watchlist in list', () => {
                const state = {
                    list: [{
                        show: { id: 123 }
                    }],
                };

                const action = {
                    type: ADD_WATCHLIST,
                    payload: {
                        show: { id: 345 },
                    },
                };

                expect(watchlistReducer(state, action)).toEqual({
                    list: [{
                        show: { id: 123 }
                    }, {
                        show: { id: 345 },
                    }],
                });
            });
        });

        describe('STRIKE_THRU_WATCHLIST', () => {
            it('sets isStrikeThru value of the item', () => {
                const state = {
                    list: [{
                        show: { id: 123 },
                        isStrikeThru: false,
                    }, {
                        show: { id: 345 }
                    }],
                };

                const action = {
                    type: STRIKE_THRU_WATCHLIST,
                    payload: {
                        id: 345,
                        isStrikeThru: true,
                    },
                };

                expect(watchlistReducer(state, action)).toEqual({
                    list: [{
                        show: { id: 123 },
                        isStrikeThru: false,
                    }, {
                        show: { id: 345 },
                        isStrikeThru: true,
                    }],
                });
            });
        });

        describe('CLOSE_WATCHLIST_ITEM', () => {
            it('removes item from the list', () => {
                const state = {
                    list: [{
                        show: { id: 123 },
                        isStrikeThru: false,
                    }, {
                        show: { id: 345 }
                    }],
                };

                const action = {
                    type: CLOSE_WATCHLIST_ITEM,
                    payload: 345,
                };

                expect(watchlistReducer(state, action)).toEqual({
                    list: [{
                        show: { id: 123 },
                        isStrikeThru: false,
                    }],
                });
            });
        });
    });
});
