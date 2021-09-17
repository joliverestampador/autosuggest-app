import axios from 'axios';
import {
    ATTEMPT_FETCH_SEARCH_RESULTS,
    FAILED_FETCH_SEARCH_RESULTS,
    SUCCEED_FETCH_SEARCH_RESULTS,
    fetchSearchResults,
} from './index';
import {TV_MAZE} from '../../../constants';

describe('AutoSuggest\'s actions', () => {
    describe('fetchSearchResults', () => {
        let dispatch;
        beforeAll(() => {
            dispatch = jest.fn();
        });

        it('attempts and fetches search results', async () => {
            axios.get = jest.fn().mockImplementation(() =>
                Promise.resolve({ data: 'payload' })
            );

            await fetchSearchResults('test-query')(dispatch);
            expect(dispatch).toHaveBeenCalledWith({
                type: ATTEMPT_FETCH_SEARCH_RESULTS,
            });

            expect(axios.get).toHaveBeenCalledWith(`${TV_MAZE}/search/shows?q=test-query`);
            expect(dispatch).toHaveBeenCalledWith({
                type: SUCCEED_FETCH_SEARCH_RESULTS,
                payload: 'payload',
            });

            expect(dispatch).toBeCalledTimes(2);
        });

        describe('when something went wrong', () => {
            it('attempts and fails search results', async () => {
                axios.get = jest.fn().mockImplementation(() =>
                    Promise.reject('something went wrong')
                );

                await fetchSearchResults('test-query')(dispatch);
                expect(dispatch).toHaveBeenCalledWith({
                    type: ATTEMPT_FETCH_SEARCH_RESULTS,
                });

                expect(axios.get).toHaveBeenCalledWith(`${TV_MAZE}/search/shows?q=test-query`);
                expect(dispatch).toHaveBeenCalledWith({
                    type: FAILED_FETCH_SEARCH_RESULTS,
                });

                expect(dispatch).toBeCalledTimes(2);
            });
        });
    });
});
