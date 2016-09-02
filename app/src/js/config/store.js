// React dependencies
import React from 'react';
import { browserHistory } from 'react-router';

// Redux dependencies
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

// App dependencies
import rootReducer from '../reducers/root';

// set the default state
const defaultState = {
    places: {}
}

// Enable Redux Dev Tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create Store for tracking state
const store = createStore(rootReducer, defaultState, enhancers);

// Sync Browser History with the store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;