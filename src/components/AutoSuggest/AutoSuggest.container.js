import { connect } from 'react-redux';
import { fetchSearchResults } from './Action';
import MethodMixins from './AutoSuggest.methods';
import Render from './AutoSuggest.render';

export const AutoSuggestContainer = MethodMixins(Render);
export const mapStateToProps = (state) => {
    return {

    };
};

export const mapDispatchToProps = (dispatch) => ({
    onSearch: () => dispatch(fetchSearchResults()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggestContainer);
