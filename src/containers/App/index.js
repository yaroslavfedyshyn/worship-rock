import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {
    ROUTE_TO_ROOT,
    ROUTE_TO_LOGIN,
    ROUTE_TO_FORGOT_PASSWORD,
    ROUTE_TO_RESET_PASSWORD,
    ROUTE_TO_SIGN_UP,
} from '../../constants/routes';

import Home from '../Home';
import Login from '../../containers/Auth/Login';
import ForgotPassword from '../../containers/Auth/ForgotPassword';
import SignUp from "../Auth/SignUp";
import ResetPassword from "../Auth/ResetPassword";

const App = () => {

    return (
            <Switch>
                <Route exact path={ROUTE_TO_ROOT} component={Home}/>
                <Route exact path={ROUTE_TO_LOGIN} component={Login}/>
                <Route exact path={ROUTE_TO_SIGN_UP} component={SignUp}/>
                <Route exact path={ROUTE_TO_FORGOT_PASSWORD} component={ForgotPassword}/>
                <Route exact path={ROUTE_TO_RESET_PASSWORD} component={ResetPassword}/>
            </Switch>
    )
};

export default App;