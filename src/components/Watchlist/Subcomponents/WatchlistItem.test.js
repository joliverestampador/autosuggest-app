import WatchlistItem from './WatchlistItem';
import { shallow } from 'enzyme';

import {Card } from 'react-bootstrap';

describe('<WatchlistItem />', () => {
    let wrapper, props;
    beforeAll(() => {
        props = {
            item: {
                score: 100,
                show: {
                    image: { medium: 'http://test.com/1.jpg' },
                    name: 'One Piece',
                    url: 'http://one-piece',
                    summary: 'Curabitur aliquet quam id dui posuere blandit. Curabitur non ' +
                        'nulla sit amet nisl tempus convallis quis ac lectus.',
                    id: 123,
                },
                isStrikeThru: true,
            },
            onClick: jest.fn(),
            onClose: jest.fn(),
        };

        wrapper = shallow(<WatchlistItem {...props} />)
    });

    it('renders image', () => {
        expect(wrapper.find('Image')).toHaveProp({
            src: 'http://test.com/1.jpg',
            alt: 'One Piece',
        })
    });

    it('renders title and link', () => {
        expect(wrapper.find('CardTitle')).toHaveProp({
            children: <Card.Link href="http://one-piece">One Piece</Card.Link>
        });
    });

    it('renders critic\'s score as subtitle', () => {
        expect(wrapper.find('CardSubtitle')).toHaveProp({
            className: 'mb-2 text-muted',
            children: 'Critics score: 100 %',
        });
    });

    it('renders the summary', () => {
        expect(wrapper.find('CardText')).toHaveProp({
            className: 'summary',
            dangerouslySetInnerHTML: { __html: 'Curabitur aliquet quam id dui posuere blandit. Curabitur non ' +
                    'nulla sit amet nisl tempus convallis quis ac lectus.' }
        });
    });

    describe('container', () => {
        it('renders', () => {
            expect(wrapper.find('.watchlist-item'))
                .toHaveClassName('watchlist-item my-2 strike-thru');
        });

        it('calls onClick on container click', () => {
            wrapper.find('.watchlist-item').simulate('click');
            expect(props.onClick).toHaveBeenCalledWith(123, false);
        });

        describe('when isStrikeThru is false', () => {
            it('does not render strike-thru className', () => {
                wrapper.setProps({ isStrikeThru: false });
                expect(wrapper.find('.watchlist-item'))
                    .not.toHaveClassName('trike-thru');
            });
        });
    });

    describe('close button', () => {
        it('renders', () => {
            expect(wrapper.find('Button')).toHaveProp({
                className: 'close-button',
                variant: 'danger',
                children: '×',
            });
        });

        it('calls onClose prop on click', () => {
            wrapper.find('Button').simulate('click');
            expect(props.onClose).toHaveBeenCalledWith(123);
        });
    });
});
