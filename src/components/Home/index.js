import React from 'react';
import {injectIntl} from "react-intl";
import {changeLocaleAction} from "../../utils/changeLangAction";
import {connect} from "react-redux";
import {compose} from "redux";
import {ROUTE_TO_LOGIN} from "../../constants/routes";

const Home = (props) => {

    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    return (
        <div>
            <p>{trans('one.text')}</p>
            <button type='button' onClick={() => props.changeLocale('ru')}>Click</button>
            <button type='button' onClick={() => props.history.push(ROUTE_TO_LOGIN)}>
                {trans('auth.login')}
            </button>
        </div>
    )
};

export default compose(
    injectIntl,
    connect(
        state => ({
            locale: state.locale,
        }),
        dispatch => ({
            changeLocale: payload => dispatch(changeLocaleAction(payload))
        })
    )
)(Home);