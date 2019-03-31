import React from 'react';
import Grid, { ThankYou } from './Grid';
import Card from './Card';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Grid />', () => {
    describe('empty grid', () => {
        it('renders an empty grid', () => {
            const thanks: ThankYou[] = [];
            const grid = shallow(<Grid thanks={thanks} />);

            expect(grid.find(Card)).toHaveLength(0);
        });

        it('renders the default title', () => {
            const thanks: ThankYou[] = [];

            const grid = shallow(<Grid thanks={thanks} />);

            expect(grid.find('h1').text()).toEqual('Thank-you!');
        });

        it('renders a custom title', () => {
            const thanks: ThankYou[] = [];
            const grid = shallow(<Grid thanks={thanks} title="My test code" />);

            expect(grid.find('h1').text()).toEqual('My test code');
        });
    });

    it('renders a grid with a card', () => {
        const thanks: ThankYou[] = [
            {
                toName: 'Foo',
                fromName: 'Bar',
                message: 'Msg',
                timestamp: new Date(),
            },
        ];
        const grid = shallow(<Grid thanks={thanks} />);

        expect(grid.find(Card)).toHaveLength(1);
    });
});
