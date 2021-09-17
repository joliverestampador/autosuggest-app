import {ADD_WATCHLIST} from '../Action';

const initialState = {
    list: [],
};

const watchlistReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_WATCHLIST:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload,
                ],
            };
        default:
            return state;
    }
};

export default watchlistReducer;
