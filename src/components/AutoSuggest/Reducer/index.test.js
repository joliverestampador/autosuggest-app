import searchReducer from './index';
import {ATTEMPT_FETCH_SEARCH_RESULTS, FAILED_FETCH_SEARCH_RESULTS, SUCCEED_FETCH_SEARCH_RESULTS} from '../Action';


describe('search reducer', () => {
    it('returns initial state', () => {
        expect(searchReducer()).toEqual({
            loading: false,
            results: [],
        });
    });

    describe('action types', () => {
        let oldState, action;
        describe('ATTEMPT_FETCH_SEARCH_RESULTS', () => {
            it('sets loading to true', () => {
                oldState = {
                    loading: false,
                    results: [],
                };

                action = {
                    type: ATTEMPT_FETCH_SEARCH_RESULTS,
                };

                expect(searchReducer(oldState, action)).toEqual({
                    loading: true,
                    results: [],
                });
            });
        });

        describe('SUCCEED_FETCH_SEARCH_RESULTS', () => {
            it('sets loading to false and it overwrites results from payload', () => {
                oldState = {
                    loading: true,
                    results: [],
                };

                action = {
                    type: SUCCEED_FETCH_SEARCH_RESULTS,
                    payload: [
                        { show: { id: 123 }},
                        { show: { id: 345 }},
                    ],
                };

                expect(searchReducer(oldState, action)).toEqual({
                    loading: false,
                    results: [
                        { show: { id: 123 }},
                        { show: { id: 345 }},
                    ],
                });
            });
        });

        describe('FAILED_FETCH_SEARCH_RESULTS', () => {
            it('sets loading to false and sets list to empty', () => {
                oldState = {
                    loading: true,
                    results: [
                        { show: { id: 123 }},
                        { show: { id: 345 }},
                    ],
                };

                action = {
                    type: FAILED_FETCH_SEARCH_RESULTS,
                };

                expect(searchReducer(oldState, action)).toEqual({
                    loading: false,
                    results: [],
                });
            });
        });
    });
});
