import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import mockedResponse from '../../api/flight-status.json';
import FlightStatus from './index';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

it('should render Page Component correctly', () => {
  const component = shallow(
    <FlightStatus flightStatusList={mockedResponse.results}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Page Component correctly for mobile view', () => {
  const component = shallow(
    <FlightStatus flightStatusList={mockedResponse.results} isMobile={true}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
});



