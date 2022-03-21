import React, { Component } from 'react'
import mockedResponse from '../../api/flight-status.json'
import NavBar from '../../molecules/navbar'
import FlightStatus from '../../molecules/flight-status'
export default class Flights extends Component {

    state = {
        flightStatusList: mockedResponse.results,
        isMobile: window.innerWidth < 768
    }

    render() {
        const { isMobile, flightStatusList } = this.state
        return (
                <><NavBar /><FlightStatus isMobile={isMobile} flightStatusList={flightStatusList} /></>
        )
    }
}
