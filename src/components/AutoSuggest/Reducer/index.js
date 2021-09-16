import {ATTEMPT_FETCH_SEARCH_RESULTS, FAILED_FETCH_SEARCH_RESULTS, SUCCEED_FETCH_SEARCH_RESULTS} from '../Action';

const initialState = {
    loading: false,
    data: [],
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATTEMPT_FETCH_SEARCH_RESULTS:
            return {
                ...state,
                loading: true,
            };
        case SUCCEED_FETCH_SEARCH_RESULTS:
            return {
                ...state,
                data: [
                    'test1',
                    'test2',
                    'test3',
                    'test4',
                ],
                loading: true,
            };
        case FAILED_FETCH_SEARCH_RESULTS:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default searchReducer;
