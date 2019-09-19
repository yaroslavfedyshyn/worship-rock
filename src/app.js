import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import history from './history';

import store from './store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import messagesEn from './translations/en.json';
import messagesRu from './translations/ru.json';
import { DEFAULT_LOCALE } from './constants';

export default class Index extends Component {
    messages = {
      en: messagesEn,
      ru: messagesRu,
    };

    constructor() {
      super();

      this.state = {
        lang: DEFAULT_LOCALE,
      };

      store.subscribe(() => {
        const state = store.getState().toJS();

        this.setState({
          lang: state.locale.lang,
        });
      });
    }

    render() {
      const { lang } = this.state;

      return (
        <Provider store={store}>
          <Router history={history}>
            <IntlProvider locale={lang} messages={this.messages[lang]}>
              <App />
            </IntlProvider>
          </Router>
        </Provider>
      );
    }
}


// If you want your src to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
