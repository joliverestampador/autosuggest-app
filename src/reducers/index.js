import { combineReducers } from 'redux';
import searchReducer from '../components/AutoSuggest/Reducer';

export default combineReducers({
    searchResults: searchReducer,
});
