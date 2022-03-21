import React, { Component } from "react";
import FlightStatus from "./flight-status-card";
import "./flight-status.scss";
import { Col, Container, Row } from "react-bootstrap";
import mockedResponse from '../../api/airports.json';
import DatePicker from "react-datepicker"
require('react-datepicker/dist/react-datepicker.css')



const blockName = "flight-status";

export default class FlightStatusResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showStatus: false,
      airportListDep: [],
      selectedLeavingFrom: "",
      selectedGoingTo: "",
      validationError: "",
      selectedDate: new Date(),
      airportListArr: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  // Updates 'view details' button click
  handleButtonClick = () => {
    this.setState({ showStatus: true });
  };

  // handles date picker on change
  handleChange(date) {
    this.setState({
      selectedDate: date
    })
  }
  
  // Renders a list of Flight status
  renderFlightStatusResult = () => {
    const flightStatusList = [];
    this.props.flightStatusList.forEach((flightStatus, i) => {
      flightStatusList.push(
        <div key={`${blockName}_${i}`}>
          <FlightStatus
            airlineDesignator={flightStatus.airlineDesignator}
            flightNumber={flightStatus.flightNumber}
            flightId={flightStatus.flightId}
            flightDate={flightStatus.flightDate}
            flightRoute={flightStatus.flightRoute}
          />
        </div>
      );
    });
    return flightStatusList;
  };

  callAirportApi = () => {
    const params = {
      method: 'GET',
      mode: 'cors',
    };
    let flightStatusResponse = '';
    const url = 'https://www.emirates.com/service/airports?lang=en';
    flightStatusResponse = fetch(url, params)
      .then(response => response.json())
      .then((responseData) => {
        return this.flightSearchCollection(responseData);
      })
    return flightStatusResponse;
  }

  async componentDidMount() {
    const apiResponse = await this.callAirportApi();
    if (apiResponse) {
       this.setState({
         airportListDep: apiResponse,
         airportListArr: apiResponse,
       })
    }
  }

  flightSearchCollection = (res) => {
    let flightStatusResult = [];
    if (res) {
      for (const [key, {
          shortName
        }] of Object.entries(res.results)) {
        const statusList = {
          key,
          shortName
        }
        flightStatusResult.push(statusList);
      }    
    }  
    return flightStatusResult
  }
  
  render() {
    const { airportListDep, airportListArr } = this.state;
    console.log('nikhat this.state.selectedLeavingFrom', this.state.selectedLeavingFrom);
    return (
      <Container>
        <Row className={`${blockName}__row1`}>
          <Col className={`${blockName}__col`}>
          <div className={`${blockName}__div`}>    
          <label className={`${blockName}__ddllabel`}>Leaving from</label>
             <select id='ddlLeavingFrom' className={`${blockName}__select`}
              value = {this.state.selectedLeavingFrom || 'DXB' }
              onChange = {e =>
                this.setState({
                  selectedLeavingFrom: e.target.value,
                  validationError: e.target.value === "" ?
                    'You must select a value' :''
                })
              }
            >
              {airportListDep && airportListDep.map(search => (
                  <option
                    key={search.key}
                    value={search.key}
                  >
                    {
                      `${search.shortName} (${search.key})`
                    }
                  </option>
              ))}
            </select>
        </div>
        </Col>
        <Col className={`${blockName}__col`}>
        <div className={`${blockName}__div`}>     
          <label className={`${blockName}__ddllabel`}>Going to</label>
              <select id='ddlGoingTo' className={`${blockName}__select`}
              value = {this.state.selectedGoingTo || 'LHR'}
              onChange = {e =>
                this.setState({
                  selectedGoingTo: e.target.value,
                  validationError: e.target.value === "" ?
                    'You must select a value' :''
                })
              }
            >
              {airportListArr && this.state.airportListArr.map(search => (
                  <option
                    key={search.key}
                    value={search.key}
                  >
                    { `${search.shortName} (${search.key})`}
                  </option>
              ))}
            </select>
        </div>       
        </Col>
        <Col className={`${blockName}__col`}>
        <div className={`${blockName}__div`}>
        <label className={`${blockName}__ddllabelDP`}>Departing</label>
          <DatePicker className={`${blockName}__dp`}
            selected={ this.state.selectedDate }
            onChange={ this.handleChange }
            name='TravelDate'
            dateFormat = "dd MMM yyyy"
          />
        </div>
        </Col>
        <Col className={`${blockName}__col`}>
        <div className={`${blockName}__divbutton`}>   
              <button className={`${blockName}__button`} onClick={ this.handleButtonClick }>View details</button>
          </div>
        </Col>
      </Row><Row>
          <Col>
            <div className={blockName}>             
                { this.renderFlightStatusResult()}     
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
