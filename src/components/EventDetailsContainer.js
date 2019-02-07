import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  deleteEventAction = () => {
    return this.props.deleteEvent(Number(this.props.match.params.id))
  }

  render() {
    //   console.log(this.props.event)
    if (!this.props.event) return "Loading..."
    return <EventDetails event={this.props.event} delete={this.props.deleteEventAction} />
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent})(EventDetailsContainer)