import React from 'react';
import {
    shallow,
    configure
} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {
    createSerializer
} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import Button from './index';

configure({
    adapter: new Adapter()
});
expect.addSnapshotSerializer(createSerializer({
    mode: 'deep'
}));

it('should render Button correctly', () => {
    const component = shallow( <
        Button title = {
            `Test Title`
        }
        handleClick = {
            jest.fn()
        }
        />,
    );
    expect(toJson(component)).toMatchSnapshot();
});
