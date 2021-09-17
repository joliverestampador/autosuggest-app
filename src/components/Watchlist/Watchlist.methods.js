import PropTypes from 'prop-types';

export function WatchlistMethodMixins(Component) {
    class WatchlistMethods extends Component {
        static propTypes = {
            watchlist: PropTypes.array.isRequired,
            onStrikeThru: PropTypes.func.isRequired,
            onClose: PropTypes.func.isRequired,
        };

        _handleStrikeThru = (id, isStrikeThru) => {
            this.props.onStrikeThru(id, isStrikeThru);
        };

        _handleClose = (id) => {
            this.props.onClose(id);
        }
    }

    return WatchlistMethods
}

export default WatchlistMethodMixins;
