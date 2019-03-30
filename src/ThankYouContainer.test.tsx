import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Grid from './Grid';
import ThankYouContainer, { ThankYouList } from './ThankYouContainer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ThankYouContainer />', () => {
    test('it renders a grid', () => {
        const thankYouContainer = shallow(<ThankYouContainer url="foo" title="Hello world" />);

        expect(thankYouContainer.find(Grid)).toHaveLength(1);
    });

    test('it fetches a set of data on mount', () => {
        const loader: (url: string) => Promise<ThankYouList> = jest
            .fn()
            .mockReturnValue(Promise.resolve({ thankYouList: [] }));
        mount(<ThankYouContainer loadThankYous={loader} url="" title="Hello world" />);

        expect(loader).toHaveBeenCalled();
    });
});
