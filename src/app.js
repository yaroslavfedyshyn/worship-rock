import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import {Provider} from "react-redux";
import {IntlProvider} from 'react-intl';
import en_messages from './translations/en.json';
import ru_messages from './translations/ru.json';
import {DEFAULT_LOCALE} from "./constants";

export default class Index extends Component {

    state = {
        locale: {
            lang: DEFAULT_LOCALE
        }
    };

    messages = {
        en: en_messages,
        ru: ru_messages
    };

    constructor() {
        super();
        store.subscribe(() => {
            this.setState({
                locale: store.getState().locale
            })
        })
    }

    render() {
        const {locale} = this.state;
        console.dir(this.state)

        return (
            <Provider store={store}>
                <Router>
                    <IntlProvider locale={locale.lang} messages={this.messages[locale.lang]}>
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
