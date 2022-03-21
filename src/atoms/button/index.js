import React from 'react'
import './button.scss'

const blockName = 'button'
export default function Button(props) {

    // A simple reusable button
    return ( <
        button onClick = {
            props.handleClick
        }
        id = {
            props.id
        }
        className = {
            `${blockName} ${props.extraClass}_${blockName}`
        } > {
            props.title
        } <
        /button>
    )
}