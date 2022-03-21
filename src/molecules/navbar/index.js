import React, { Component } from 'react'
import './navbar.scss'
const blockname = 'navbar'

export default class NavBar extends Component {

    // Renders a Navbar on top of the page
    render() {
        return (
            <div>
                <nav className={blockname}>
               <h1>NIKHAT SHAHIN KHAN</h1>
                </nav>
            </div>
        )
    }
}
