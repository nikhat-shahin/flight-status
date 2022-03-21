import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import NavBar from './index';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

it('renders correctly', () => {
  const component = renderer.create(
    <NavBar />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should set classname for mobile UI and match snaps', () => {
 
  const component = shallow(
    <NavBar isMobile={true}  />
  );
  expect(toJson(component)).toMatchSnapshot();
});