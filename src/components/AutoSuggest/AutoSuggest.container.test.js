import {mapDispatchToProps, mapStateToProps, AutoSuggestContainer} from './AutoSuggest.container';
import * as action from './Action';
import * as watchlistAction from '../Watchlist/Action';
import { shallow } from 'enzyme';

describe('<AutoSuggest />', () => {
    describe('container', () => {
        describe('mapStateToProps', () => {
            let props, state;
            beforeAll(() => {
                state = {
                    search: {
                        results: [
                            {
                                id: 123,
                                name: 'One Piece'
                            },
                        ],
                        loading: true,
                    }
                };

                props = mapStateToProps(state);
            });
            it('returns props', () => {
                expect(props.results).toEqual([
                    {
                        id: 123,
                        name: 'One Piece'
                    },
                ]);
                expect(props.isLoading).toBeTruthy();
            });
        });

        describe('mapDispatchToProps', () => {
            let dispatch, props;
            beforeAll(() => {
                dispatch = jest.fn();
                props = mapDispatchToProps(dispatch);
            });

            describe('onSearch', () => {
                it('dispatches actions and passes query', () => {
                    action.fetchSearchResults = jest.fn(() => 'mock fetchSearchResults');
                    props.onSearch('girls');
                    expect(dispatch).toHaveBeenCalledWith('mock fetchSearchResults');
                    expect(action.fetchSearchResults).toHaveBeenCalledWith('girls');
                });
            });

            describe('onAddWatchlist', () => {
                it('dispatches actions and passes query', () => {
                    watchlistAction.addWatchlist = jest.fn(() => 'mock addWatchlist');
                    props.onAddWatchlist('watchlist test');
                    expect(dispatch).toHaveBeenCalledWith('mock addWatchlist');
                    expect(watchlistAction.addWatchlist).toHaveBeenCalledWith('watchlist test');
                });
            });
        });
    });

    describe('render', () => {
        let wrapper, props;
        beforeAll(() => {
            props = {
                results: [
                    {
                        show: {
                            id: 123,
                            name: 'One Piece'
                        }
                    },
                    {
                        show: {
                            id: 345,
                            name: 'Game of thrones'
                        }
                    },
                ],
                isLoading: false,
                onSearch: jest.fn(),
                onAddWatchlist: jest.fn(),
            };

            wrapper = shallow(<AutoSuggestContainer {...props} />)
        });

        it('renders AsyncTypeahead', () => {
            expect(wrapper.find('#auto-suggest')).toHaveProp({
                delay: 500,
                isLoading: false,
                selected: [],
                placeholder: 'Search TV shows here',
                promptText: 'Search TV shows here',
                searchText: 'searching tv shows...',
                emptyLabel: 'Please refine search query',
            });
        });

        describe('on change', () => {
            it('calls onAddWatchlist prop and passes the selected watchlist', () => {
                wrapper.find('#auto-suggest').simulate('change', [{ id: 345 }]);
                expect(props.onAddWatchlist).toHaveBeenCalledWith({
                    show: {
                        id: 345,
                        name: 'Game of thrones'
                    }
                })
            });

            describe('when watchlist is empty', () => {
                it('does not call onAddWatchlist', () => {
                    wrapper.find('#auto-suggest').simulate('change', [{ id: 0 }]);
                    expect(props.onAddWatchlist).not.toHaveBeenCalled();
                });
            });
        });

        describe('on search', () => {
            it('calls onAddWatchlist prop and passes the selected watchlist', () => {
                wrapper.find('#auto-suggest').simulate('search', 'oh yeah');
                expect(props.onSearch).toHaveBeenCalledWith('oh yeah')
            });

            describe('when query is less than 3', () => {
                it('does not call onSearch', () => {
                    wrapper.find('#auto-suggest').simulate('search', '');
                    wrapper.find('#auto-suggest').simulate('search', 'n');
                    wrapper.find('#auto-suggest').simulate('search', 'no');
                    expect(props.onSearch).not.toHaveBeenCalled();
                    expect(props.onSearch).toBeCalledTimes(0);
                });
            });
        });
    });
});
