import React from "react";

const Menu = (props) => {

    return (
        <div className="oneMusic-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">

                    {/*Menu*/}
                    <nav className="classy-navbar justify-content-between" id="oneMusicNav">

                        {/*Nav brand*/}
                        <a href="index.html" className="nav-brand"><img src="../../../../img/core-img/logo.png" alt=""/></a>

                        {/* Navbar Toggler */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        {/* Menu */}
                        <div className="classy-menu">

                            {/* Close Button*/}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span
                                    className="bottom"></span></div>
                            </div>

                            {/* Nav Start */}
                            <div className="classynav">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="albums-store.html">Albums</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="albums-store.html">Albums</a></li>
                                            <li><a href="event.html">Events</a></li>
                                            <li><a href="blog.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="#">Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Even Dropdown</a></li>
                                                    <li><a href="#">Even Dropdown</a></li>
                                                    <li><a href="#">Even Dropdown</a></li>
                                                    <li><a href="#">Even Dropdown</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                            <li><a href="#">Deeply Dropdown</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Even Dropdown</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="event.html">Events</a></li>
                                    <li><a href="blog.html">News</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>

                                {/* Login/Register & Cart Button */}
                                <div
                                    className="login-register-cart-button d-flex align-items-center">
                                    {/* Login/Register */}
                                    <div className="login-register-btn mr-50">
                                        <a href="login.html" id="loginBtn">Login / Register</a>
                                    </div>

                                    {/* Cart Button */}
                                    <div className="cart-btn">
                                        <p><span className="icon-shopping-cart"></span> <span
                                            className="quantity">1</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* Nav End */}

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default Menu;