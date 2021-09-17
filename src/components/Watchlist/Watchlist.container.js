import { connect } from 'react-redux';
import Render from './Watchlist.render';
import Mixins from './Watchlist.methods';
import {closeWatchlistItem, strikeThruWatchlist} from './Action';

export const WatchlistContainer = Mixins(Render);

export const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist.list,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onStrikeThru: (id, isStrikeThru) =>  dispatch(strikeThruWatchlist(id, isStrikeThru)),
        onClose: (id) => dispatch(closeWatchlistItem(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer)
