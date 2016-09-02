// React dependencies
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Redux dependencies
import { Provider } from 'react-redux';
import store, { history } from './store';

// App dependencies
import Layout from '../components/global/layout';
import MapPage from '../pages/map';

const routes = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ Layout }>
                <IndexRoute component={ MapPage } />
                { /* <Route path="details/:id" component={ DetailsPage } /> */ }
            </Route>
        </Router>
    </Provider>
)

export default routes;