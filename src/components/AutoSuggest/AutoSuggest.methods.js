import PropTypes from 'prop-types';

export function AutoSuggestMethodMixins(Component) {
    class AutoSuggest extends Component {
        static propTypes = {
            onSearch: PropTypes.func.isRequired,
        };

        _handleChange = (e) => {
            // handle change here
        };

        _handleOnInputChange = (value) => {
            // handle input change here
        };
    }

    return AutoSuggest;
};

export default AutoSuggestMethodMixins;
