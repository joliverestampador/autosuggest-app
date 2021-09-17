import App from './App';
import { shallow } from 'enzyme';
import logo from './images/logo.png';
import AutoSuggestContainer from './components/AutoSuggest';
import Watchlist from './components/Watchlist';

describe('App', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<App />);
    });

    it('renders logo', () => {
        expect(wrapper.find('Image')).toHaveProp({
            src: logo,
            height: '150',
            width: '150',
            alt: 'logo',
        });
    });

    it('renders AutoSuggestContainer', () => {
        expect(wrapper.find(AutoSuggestContainer)).toExist();
    });

    it('renders Watchlist', () => {
        expect(wrapper.find(Watchlist)).toExist();
    });
});
