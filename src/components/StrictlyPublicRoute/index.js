import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Route} from 'react-router-dom';

import {ROUTE_TO_ROOT} from "../../constants/routes";


const PrivateRoute = ({exact, path, component, isAuthorized}) => {
    if (isAuthorized) {
        return (
            <Redirect to={ROUTE_TO_ROOT}/>
        )
    } else {
        return (
            <Route exact={exact}
                   path={path}
                   component={component}
            />
        )
    }

};


const mapStateToProps = state => ({
    isAuthorized: state.getIn(['auth', 'me'])
});


export default connect(mapStateToProps)(PrivateRoute)