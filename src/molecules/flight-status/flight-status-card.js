import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import arrowLogo from '../../arrow.png'
import flighttail from '../../flighttail.svg'
import triangleedge from '../../triangleedge.png'
import './flight-status.scss'
import moment from 'moment'

const blockName = 'flight-status'

export default class FlightStatus extends Component {
    // handleBook = () => {
    //     this.props.handleBooked(this.props.buttonId)
    // }    
    formatDateInReceivedTimezone = (date, format) => {
        const parsed = moment(date);
      
        if (!parsed.isValid()) {
          return '-';
        }
        const timeZoneOffset = moment.parseZone(date).utcOffset();   
        return parsed.utcOffset(timeZoneOffset).format(format);
      };

    fetchStatusCode = (actualStatusCode) => {
    let statusCode = '';
    if (actualStatusCode ==='ARVD') statusCode = 'Arrived'
    else statusCode = 'Not yet arrived'

    return statusCode;
    };

    render() {
        const { airlineDesignator,flightNumber,flightRoute,booked} = this.props;
        return (
            <div className={`${blockName}__grey-container`}>
                <Container>
                    <Row className={`${blockName}__row`}>
                        <Col className={`${blockName}__col`} >
                            <div className={`${blockName}__time-container`}>
                            <p className={`${blockName}__airport`}>{`${flightRoute[0].originActualAirportCode}`}</p>
                            <p className={`${blockName}__state`}>{`Departed:`}</p>
                            <p className={`${blockName}__time`}>{this.formatDateInReceivedTimezone(this.props.flightRoute[0].departureTime.actual,'HH:mm')}</p>
                            <p className={`${blockName}__date`}>{this.formatDateInReceivedTimezone(this.props.flightRoute[0].departureTime.actual,'ddd DD MMM')}</p>
                            <p className={`${blockName}__scheduled-time`}>Scheduled Departure:{this.formatDateInReceivedTimezone(this.props.flightRoute[0].departureTime.schedule,'HH:mm')}</p>
                            </div>
                        </Col>
                        <Col className={`${blockName}__col`} >
                            <img className={`${blockName}__arrow-img`} src={arrowLogo}
                                alt={'express'} />
                        </Col>
                        <Col className={`${blockName}__col`} >
                            <div className={`${blockName}__time-container`}>
                            <p className={`${blockName}__airport`}>{`${flightRoute[0].destinationActualAirportCode}`}</p>
                            <p className={`${blockName}__state`}>{`Arrived:`}</p>
                            <p className={`${blockName}__time`}>{this.formatDateInReceivedTimezone(this.props.flightRoute[0].arrivalTime.actual,'HH:mm')}</p>
                            <p className={`${blockName}__date`}>{this.formatDateInReceivedTimezone(this.props.flightRoute[0].arrivalTime.actual,'ddd DD MMM')}</p>
                            <p className={`${blockName}__scheduled-time`}>Scheduled Arrival:{this.formatDateInReceivedTimezone(this.props.flightRoute[0].arrivalTime.schedule,'HH:mm')}</p>
                            </div>
                        </Col>
                        <Col className={`${blockName}__status`}>
                        
                        <div className={`${blockName}__flightstatus ${blockName}__${flightRoute[0].statusCode}__color`}>{this.fetchStatusCode(this.props.flightRoute[0].statusCode)}</div>
                            <p className={`${blockName}__flight-number-text`}>
                            <img className={`${blockName}__flight-number-tail`} src={flighttail}
                             alt={'express'} /> {`${airlineDesignator} ${flightNumber}`}
                             
                            </p>     
                            <img className={`${blockName}__flight-number-triangle`} src={triangleedge}
                             alt={'express'} /> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
