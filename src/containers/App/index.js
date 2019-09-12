import React, {Component} from 'react'
import {Switch} from 'react-router-dom';
import {connect} from "react-redux";

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
import {getMeAction} from "../Auth/actions";

import PrivateRoute from '../../components/PrivatRoute'
import StrictlyPublicRoute from '../../components/StrictlyPublicRoute'

class App extends Component {

    componentDidMount() {
        this.props.getMe();
    }

    render() {
        return (
            <Switch>
                <PrivateRoute exact path={ROUTE_TO_ROOT} component={Home}/>
                <StrictlyPublicRoute exact path={ROUTE_TO_LOGIN} component={Login}/>
                <StrictlyPublicRoute exact path={ROUTE_TO_SIGN_UP} component={SignUp}/>
                <StrictlyPublicRoute exact path={ROUTE_TO_FORGOT_PASSWORD} component={ForgotPassword}/>
                <StrictlyPublicRoute exact path={ROUTE_TO_RESET_PASSWORD} component={ResetPassword}/>
            </Switch>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMe: () => dispatch(getMeAction())
});

export default connect((state) => state, mapDispatchToProps)(App)
