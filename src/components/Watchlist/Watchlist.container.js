import { connect } from 'react-redux';
import WatchlistPage from './Watchlist.render';

export const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist.list,
    };
};

export default connect(mapStateToProps)(WatchlistPage)
