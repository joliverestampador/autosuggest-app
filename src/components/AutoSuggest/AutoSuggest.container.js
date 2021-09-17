import { connect } from 'react-redux';
import { fetchSearchResults } from './Action';
import { addWatchlist } from '../Watchlist/Action';
import MethodMixins from './AutoSuggest.methods';
import Render from './AutoSuggest.render';

export const AutoSuggestContainer = MethodMixins(Render);
export const mapStateToProps = (state) => {
    return {
        results: state.search.results,
        isLoading: state.search.loading,
    };
};

export const mapDispatchToProps = (dispatch) => ({
    onSearch: (query) => dispatch(fetchSearchResults(query)),
    onAddWatchlist: (watchlist) => dispatch(addWatchlist(watchlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggestContainer);
