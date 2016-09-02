// Redux dependencies
import { bindActionCreators } from 'redux';

// App dependencies
import * as actionCreators from './actions';

// map the state to the react props
export function mapStateToProps(state) {
    return {
        places: state.places
    };
}

// map the dispatch and action creators to the react props
export function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}