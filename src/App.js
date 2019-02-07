import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import CreateEventFormContainer from './components/CreateEventFormContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          
          <Route path="/" exact component={EventsListContainer} />
          <CreateEventFormContainer />
        </div>
      </Provider>
    );
  }
}

export default App;