import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  ROUTE_TO_ROOT,
  ROUTE_TO_LOGIN,
  ROUTE_TO_FORGOT_PASSWORD,
  ROUTE_TO_RESET_PASSWORD,
  ROUTE_TO_SIGN_UP,
} from '../../constants/routes';

import Home from '../Home';
import Login from '../Auth/Login';
import ForgotPassword from '../Auth/ForgotPassword';
import SignUp from '../Auth/SignUp';
import ResetPassword from '../Auth/ResetPassword';
import { getMeAction } from '../Auth/actions';
import '../../css/style.css';

class App extends Component {
  componentDidMount() {
    const { getMe } = this.props;
    getMe();
  }

  render() {
    return (
      <Switch>
        <Route exact path={ROUTE_TO_ROOT} component={Home} />
        <Route exact path={ROUTE_TO_LOGIN} component={Login} />
        <Route exact path={ROUTE_TO_SIGN_UP} component={SignUp} />
        <Route exact path={ROUTE_TO_FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={ROUTE_TO_RESET_PASSWORD} component={ResetPassword} />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMeAction()),
});

export default connect((state) => state, mapDispatchToProps)(App);
