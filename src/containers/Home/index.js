import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Header from '../Header';
import MainCover from '../MainCover';
import Footer from '../Footer';
import Index from '../../components/ItemList';
// import { ROUTE_TO_LOGIN } from '../../constants/routes';
import changeLocaleAction from '../../utils/changeLangAction';
import Trands from '../Trands';

const Home = () => (
  <div>
    <Header />
    <MainCover />
    <Trands>
      <Index />
    </Trands>
    <Footer />
  </div>
);

export default compose(
  injectIntl,
  connect(
    (state) => ({
      locale: state.getIn(['locale', 'lang']),
    }),
    (dispatch) => ({
      changeLocale: (payload) => dispatch(changeLocaleAction(payload)),
    }),
  ),
)(Home);
