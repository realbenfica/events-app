import React from 'react'
import { Link } from 'react-router-dom'

export default function EventsList(props) {
    return (
        <ul>
            {
                props.events.map(event =>
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.name}</Link>
                    </li>)
            }
        </ul>
    )
}
