import React from 'react'

export default function EventDetails(props) {
    return (
        <div>
            <h1>{props.event.name}</h1>
            <i>{props.event.date}</i>
            <p>{props.event.description}</p>
        </div>
    )
}
