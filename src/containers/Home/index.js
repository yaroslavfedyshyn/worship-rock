import React, {Component} from 'react';
import {injectIntl} from "react-intl";
import {changeLocaleAction} from "../../utils/changeLangAction";
import {connect} from "react-redux";
import {compose} from "redux";
import {ROUTE_TO_LOGIN} from "../../constants/routes";
import {getMeAction} from "../Auth/actions";

class Home extends Component {

    render() {
        const trans = (id) => {
            return this.props.intl.formatMessage({id});
        };

        return (
            <div>
                <p>{trans('one.text')}</p>
                <button type='button' onClick={() => this.props.changeLocale('ru')}>Click</button>
                <button type='button' onClick={() => this.props.history.push(ROUTE_TO_LOGIN)}>
                    {trans('auth.login')}
                </button>
            </div>
        )
    }
}

export default compose(
    injectIntl,
    connect(
        state => ({
            locale: state.getIn(['locale', 'lang']),
        }),
        dispatch => ({
            changeLocale: payload => dispatch(changeLocaleAction(payload)),
        })
    )
)(Home);