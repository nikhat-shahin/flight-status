import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import Page from './index';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

it('should render Page Component correctly', () => {
  const component = shallow(
    <Page />,
  );
  expect(toJson(component)).toMatchSnapshot();
});

