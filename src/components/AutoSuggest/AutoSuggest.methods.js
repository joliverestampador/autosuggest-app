import PropTypes from 'prop-types';

export function AutoSuggestMethodMixins(Component) {
    class AutoSuggest extends Component {
        static propTypes = {
            onSearch: PropTypes.func.isRequired,
            onAddWatchlist: PropTypes.func.isRequired,
            results: PropTypes.array.isRequired,
            isLoading: PropTypes.bool.isRequired,
        };

        static defaultProps = {
            results: [],
        };

        _handleChange = (selected) => {
            const { results } = this.props;
            const id = selected[0].id;
            const watchlist = results.find(item => item.show.id === id);
            this.props.onAddWatchlist(watchlist);
        };

        _handleSearch = (query) => {
            if (query.length > 2) {
                this.props.onSearch(query);
            }
        };

        _getOptions = () => {
            const { results } = this.props;
            return results.map(({ show }) => ({
                id: show.id,
                label: show.name,
            }))
        };
    }

    return AutoSuggest;
};

export default AutoSuggestMethodMixins;
