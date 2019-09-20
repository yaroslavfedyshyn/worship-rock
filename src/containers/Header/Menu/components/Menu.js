import React from 'react';
import {
  ROUTE_TO_LOGIN,
  ROUTE_TO_ROOT,
} from '../../../../constants/routes';
import MainMenu from '../../../../components/MainMenu';

const Menu = () => (
  <div className="oneMusic-main-menu">
    <div className="classy-nav-container breakpoint-off">
      <div className="container">

        {/* Menu */}
        <nav className="classy-navbar justify-content-between" id="oneMusicNav">

          {/* Nav brand */}
          <a href={ROUTE_TO_ROOT} className="nav-brand"><img src={require('../../../../img/core-img/logo.png')} alt="" /></a>

          {/* Navbar Toggler */}
          <div className="classy-navbar-toggler">
            <span className="navbarToggler">
              <span />
              <span />
              <span />
            </span>
          </div>

          {/* Menu */}
          <div className="classy-menu">

            {/* Close Button */}
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top" />
                <span
                  className="bottom"
                />
              </div>
            </div>

            {/* Nav Start */}
            <div className="classynav">
              <MainMenu />

              {/* Login/Register & Cart Button */}
              <div
                className="login-register-cart-button d-flex align-items-center"
              >
                {/* Login/Register */}
                <div className="login-register-btn mr-50">
                  <a href={ROUTE_TO_LOGIN} id="loginBtn">Login / Register</a>
                </div>

                {/* Cart Button */}
                <div className="cart-btn">
                  <p>
                    <span className="icon-shopping-cart" />
                    {' '}
                    <span
                      className="quantity"
                    >
1
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Nav End */}

          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Menu;
