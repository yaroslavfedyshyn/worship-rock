import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {
    ROUTE_TO_ROOT,
    ROUTE_TO_LOGIN,
    ROUTE_TO_FORGOT_PASSWORD
} from '../../constants/routes';

import Home from '../../components/Home';
import Login from '../../containers/Auth/Login';
import ForgotPassword from '../../containers/Auth/ForgotPassword';

const App = () => {

    return (
            <Switch>
                <Route exact path={ROUTE_TO_ROOT} component={Home}/>
                <Route exact path={ROUTE_TO_LOGIN} component={Login}/>
                <Route exact path={ROUTE_TO_FORGOT_PASSWORD} component={ForgotPassword}/>
            </Switch>
    )
};

export default App;