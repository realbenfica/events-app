import React from 'react'


export default function EventDetails(props) {
    const { event, delete } = props
    return (
        <div>
            <h1>{event.name}</h1>
            <i>{event.date}</i>
            <p>{event.description}</p>
            <button onClick={props.delete}>delete</button>
        </div>
    )
}
