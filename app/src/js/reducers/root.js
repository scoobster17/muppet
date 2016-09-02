// Redux dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import places from './places';

const rootReducer = combineReducers({
    places,
    routing: routerReducer
});

export default rootReducer;