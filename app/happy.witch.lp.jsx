import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import middleWare from 'redux-thunk';
import reducers from './reducers';
import HappyWitchLP from './components/HappyWitchLP.jsx';

const store = createStore(reducers, {}, applyMiddleware(middleWare));

render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={HappyWitchLP}/>
        </Router>

    </Provider>, document.getElementById('app')
);