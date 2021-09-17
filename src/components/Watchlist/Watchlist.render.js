import React from 'react';
import './Watchlist.scss';
import WatchlistItem from './Subcomponents/WatchlistItem';

export class WatchlistPage extends React.Component {
    render() {
        const { watchlist } = this.props;
        return (
            <div className="watchlist">
                {
                    watchlist.length ? (
                        watchlist.map((item) => (
                            <WatchlistItem
                                item={item}
                                onClick={this._handleStrikeThru}
                                onClose={this._handleClose}
                            />
                        ))
                    ) : <h6 className="watchlist-empty text-muted">No TV Shows to watch 📺</h6>
                }
            </div>
        )
    }
}

export default WatchlistPage;
