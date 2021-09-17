import { combineReducers } from 'redux';
import searchReducer from '../components/AutoSuggest/Reducer';
import watchlistReducer from '../components/Watchlist/Reducer';

export default combineReducers({
    search: searchReducer,
    watchlist: watchlistReducer,
});
