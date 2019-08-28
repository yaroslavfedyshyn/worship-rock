import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {
    ROUTE_TO_ROOT,
    ROUTE_TO_LOGIN,
} from '../../constants/routes';
import Home from '../../components/Home';
import Login from '../../containers/Auth/Login';

const App = () => {

    return (
            <Switch>
                <Route exact path={ROUTE_TO_ROOT} component={Home}/>
                <Route exact path={ROUTE_TO_LOGIN} component={Login}/>
            </Switch>
    )
};

export default App;