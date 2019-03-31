import React from 'react';
import Card from './Card';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Card />', () => {
    test('it renders a card', () => {
        const timestamp = new Date();
        const card = shallow(<Card toName="Foo" message="Thanks for being awesome!" timestamp={timestamp} />);

        expect(card.contains(<h1>Foo</h1>)).toBeTruthy();
        expect(card.contains(<p>Thanks for being awesome!</p>)).toBeTruthy();
    });
});
