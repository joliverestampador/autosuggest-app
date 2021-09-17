import {ADD_WATCHLIST, CLOSE_WATCHLIST_ITEM, STRIKE_THRU_WATCHLIST} from '../Action';

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
        case STRIKE_THRU_WATCHLIST: {
            const { id, isStrikeThru } = action.payload;
            const newList = state.list.map(item => {
                if (item.show.id === id) {
                    return {
                        ...item,
                        isStrikeThru
                    };
                }
                return item;
            });
            return {
                ...state,
                list: newList,
            };
        }
        case CLOSE_WATCHLIST_ITEM: {
            const newList = state.list.filter(item => item.show.id !== action.payload);
            return {
                ...state,
                list: newList,
            };
        }
        default:
            return state;
    }
};

export default watchlistReducer;
