import React from 'react'

export default function EventForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
        <label>
            Name:
            <input name='name' type="text" value={props.name} onChange={props.onChange} />
            Date:
            <input name='date' type="date" value={props.date} onChange={props.onChange} />
            Description:
          <input name= 'description' type="text" value={props.description} onChange={props.onChange} />
        </label>
        <input type="submit" value="Submit" />
    </form >
      )
}
