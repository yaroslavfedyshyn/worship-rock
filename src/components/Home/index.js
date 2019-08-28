import React from 'react';
import {injectIntl} from "react-intl";
import {changeLocaleAction} from "../../utils/changeLangAction";
import {connect} from "react-redux";
import {compose} from "redux";

const Home = (props) => {

    const trans = (id) => {
        return props.intl.formatMessage({id});
    };

    return (
        <div>
            <p>{trans('one.text')}</p>
            <button type='button' onClick={() => props.changeLocale('ru')}>Click</button>
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