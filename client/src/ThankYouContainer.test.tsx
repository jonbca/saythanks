import React from 'react';
import { configure, mount } from 'enzyme';
import Grid from './Grid';
import ThankYouContainer, { ThankYouData } from './ThankYouContainer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ThankYouContainer />', () => {
    test('it renders a grid', () => {
        const thankYouContainer = mount(<ThankYouContainer url="foo" title="Hello world" />);

        expect(thankYouContainer.find(Grid)).toHaveLength(1);
    });

    test('it fetches a set of data on mount', () => {
        const loader: (url: string) => Promise<ThankYouData> = jest
            .fn()
            .mockReturnValue(Promise.resolve({ thankYous: [] }));
        mount(<ThankYouContainer loadThankYous={loader} url="" title="Hello world" />);

        expect(loader).toHaveBeenCalled();
    });

    describe('timer refresh', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        test('it sets a refresh interval for loading from the props', () => {
            const loader: (url: string) => Promise<ThankYouData> = jest
                .fn()
                .mockReturnValue(Promise.resolve({ thankYous: [] }));

            mount(<ThankYouContainer loadThankYous={loader} url="" title="Hello world" refreshInterval={500} />);

            expect(setInterval).toHaveBeenCalledTimes(1);
            expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 500);
        });

        test('it sets a refresh interval for loading from default props', () => {
            const loader: (url: string) => Promise<ThankYouData> = jest
                .fn()
                .mockReturnValue(Promise.resolve({ thankYous: [] }));

            const container = mount(<ThankYouContainer loadThankYous={loader} url="" title="Hello world" />);

            expect(setInterval).toHaveBeenCalledTimes(1);
            expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 30000);

            container.unmount();
        });

        test('it calls the refresh function on an interval', () => {
            const loader: (url: string) => Promise<ThankYouData> = jest
                .fn()
                .mockReturnValue(Promise.resolve({ thankYous: [] }));

            const container = mount(<ThankYouContainer loadThankYous={loader} url="" title="Hello world" />);

            expect(loader).toHaveBeenCalledTimes(1);

            jest.runOnlyPendingTimers();
            container.unmount();
            expect(loader).toHaveBeenCalledTimes(2);
        });

        test('it cancels the refresh on unmount', () => {
            const loader: (url: string) => Promise<ThankYouData> = jest
                .fn()
                .mockReturnValue(Promise.resolve({ thankYous: [] }));

            const container = mount(<ThankYouContainer loadThankYous={loader} url="" title="Hello world" />);

            expect(loader).toHaveBeenCalledTimes(1);

            container.unmount();

            expect(clearInterval).toHaveBeenCalled();
        });
    });
});
