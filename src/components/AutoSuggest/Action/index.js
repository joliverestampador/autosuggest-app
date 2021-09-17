import axios from 'axios'
import {TV_MAZE} from '../../../constants';

export const ATTEMPT_FETCH_SEARCH_RESULTS = 'ATTEMPT_FETCH_SEARCH_RESULTS';
export const SUCCEED_FETCH_SEARCH_RESULTS = 'SUCCEED_FETCH_SEARCH_RESULTS';
export const FAILED_FETCH_SEARCH_RESULTS = 'FAILED_FETCH_SEARCH_RESULTS';

export const fetchSearchResults = (query) => async (dispatch) => {
    dispatch({
        type: ATTEMPT_FETCH_SEARCH_RESULTS,
    });

    try {
        const { data } = await axios.get(`${TV_MAZE}/search/shows?q=${query}`);
        dispatch({
            type: SUCCEED_FETCH_SEARCH_RESULTS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: FAILED_FETCH_SEARCH_RESULTS,
        });
    }
};
