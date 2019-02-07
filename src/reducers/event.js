import { EVENT_FETCHED } from '../actions/events';

export default (state = null, action) => {
    switch (action.type) {
        case EVENT_FETCHED:
            return action.events
        default:
            return state
    }
}
