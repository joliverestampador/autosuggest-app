import {mapDispatchToProps, mapStateToProps, WatchlistContainer}  from './Watchlist.container';
import * as action from './Action';
import { shallow } from 'enzyme';

describe('<Watchlist />', () => {
    describe('container', () => {
        let props, state;
        describe('mapStateToProps', () => {
            it('returns props', () => {
                state = {
                    watchlist: {
                        list: [
                            {
                                id: 123,
                                name: 'One Piece'
                            },
                        ],
                    },
                };

                props = mapStateToProps(state);
                expect(props.watchlist).toEqual([
                    {
                        id: 123,
                        name: 'One Piece'
                    },
                ]);
            });
        });

        describe('mapDispatchToProps', () => {
            let props, dispatch;
            beforeAll(() => {
                dispatch = jest.fn();
                props = mapDispatchToProps(dispatch);
            });

            describe('onStrikeThru', () => {
                it('dispatches the action and passes id and boolean value', () => {
                    action.strikeThruWatchlist = jest.fn(() => 'strikeThruWatchlist mock');
                    props.onStrikeThru(123, true);
                    expect(dispatch).toHaveBeenCalledWith('strikeThruWatchlist mock');
                    expect(action.strikeThruWatchlist).toHaveBeenCalledWith(123, true);
                });
            });

            describe('onClose', () => {
                it('dispatches the action and passes id value', () => {
                    action.closeWatchlistItem = jest.fn(() => 'onCloseWatchlistItem mock');
                    props.onClose(123,);
                    expect(dispatch).toHaveBeenCalledWith('onCloseWatchlistItem mock');
                    expect(action.closeWatchlistItem).toHaveBeenCalledWith(123);
                });
            });
        });
    });

    describe('render', () => {
        let wrapper, props;
        beforeAll(() => {
            props = {
                watchlist: [{
                    show: { id: 123 },
                }, {
                    show: { id: 345 },
                }],
                onStrikeThru: jest.fn(),
                onClose: jest.fn(),
            };

            wrapper = shallow(<WatchlistContainer {...props} />);
        });

        it('renders', () => {
            // first item
            expect(wrapper.find('WatchlistItem').at(0)).toHaveProp({
                item: { show: { id: 123 } },
            });

            // second item
            expect(wrapper.find('WatchlistItem').at(1)).toHaveProp({
                item: { show: { id: 345 } },
            });
        });

        it('does not render empty list message', () => {
            expect(wrapper.find('.watchlist-empty')).not.toExist();
        });

        it('calls onStrikeThru on strike thru and it passes arguments', () => {
            wrapper.find('WatchlistItem').at(0).simulate('click', 123, false);
            expect(props.onStrikeThru).toHaveBeenCalledWith(123, false);
        });

        it('calls onClose on close and passes id', () => {
            wrapper.find('WatchlistItem').at(0).simulate('close', 123);
            expect(props.onClose).toHaveBeenCalledWith(123);
        });

        describe('when list is empty', () => {
            it('shows empty list message', () => {
                wrapper.setProps({ watchlist: [] });
                expect(wrapper.find('h6')).toHaveProp({
                    className: 'watchlist-empty text-muted',
                    children: 'No TV Shows to watch 📺',
                });
            });

            it('does not render a watchlist item', () => {
                expect(wrapper.find('WatchlistItem')).not.toExist();
            });
        });
    });
});
