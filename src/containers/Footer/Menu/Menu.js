import React from 'react';
import MainMenu from '../../../components/MainMenu';

const FooterMenu = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row d-flex flex-wrap align-items-center">
        <div className="col-12 col-md-6">
          <a href="#"><img src={require('../../../img/core-img/logo.png')} alt="" /></a>
        </div>

        <div className="col-12 col-md-6">
          <div className="footer-nav">
            <MainMenu />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterMenu;
