import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import history from './history';
import {Provider} from "react-redux";
import {IntlProvider} from 'react-intl';

import store from "./store";
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import en_messages from './translations/en.json';
import ru_messages from './translations/ru.json';
import {DEFAULT_LOCALE} from "./constants";

export default class Index extends Component {

    state = {
        lang: DEFAULT_LOCALE
    };

    messages = {
        en: en_messages,
        ru: ru_messages
    };

    constructor() {
        super();
        store.subscribe(() => {
            const state = store.getState().toJS();

            this.setState({
                lang: state.locale.lang
            })
        })
    }

    render() {
        const {lang} = this.state;

        return (
            <Provider store={store}>
                <Router history={history}>
                    <IntlProvider locale={lang} messages={this.messages[lang]}>
                        <App/>
                    </IntlProvider>
                </Router>
            </Provider>
        )
    }
}


// If you want your src to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
