import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import FlightStatus from './flight-status-card';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

it('should render Page Component correctly', () => {
  const component = shallow(
    < FlightStatus airlineDesignator = {
      `EK`
    }
    flightNumber = {
      `0007`
    }
    flightId = {
      `2022031600007DXB`
    }
    flightDate = {
      `2022-03-16`
    }
    flightRoute = {
      [{
        "legNumber": "1",
        "originActualAirportCode": "Dubai (DXB)",
        "destinationActualAirportCode": "London (LHR)",
        "originPlannedAirportCode": "Dubai (DXB)",
        "destinationPlannedAirportCode": "London (LHR)",
        "statusCode": "ARVD",
        "flightPosition": 100,
        "totalTravelDuration": "08:00",
        "isIrregular": "false",
        "departureTime": {
          "schedule": "2022-03-17T03:10:00Z",
          "estimated": "2022-03-17T03:10:00Z",
          "actual": "2022-03-17T03:15:00Z"
        },
        "arrivalTime": {
          "schedule": "2022-03-17T07:10:00Z",
          "estimated": "2022-03-17T06:53:00Z",
          "actual": "2022-03-17T07:08:00Z"
        },
        "operationalUpdate": {
          "lastUpdated": "2022-01-20T04:00:55Z"
        },
        "departureTerminal": "Terminal 3",
        "arrivalTerminal": "Terminal 3",
        "flightOutageType": 0
      }]
    }
    booked = {
      true
    }
    buttonId = {
      1
    }
    />,
  );
  expect(toJson(component)).toMatchSnapshot();
});