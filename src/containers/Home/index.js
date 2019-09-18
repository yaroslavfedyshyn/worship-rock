import React, {Component} from 'react';
import {injectIntl} from "react-intl";
import {changeLocaleAction} from "../../utils/changeLangAction";
import {connect} from "react-redux";
import {compose} from "redux";

import Header from "../Header";
import {ROUTE_TO_LOGIN} from "../../constants/routes";
import MainCover from "../MainCover";

class Home extends Component {

    render() {
        const trans = (id) => {
            return this.props.intl.formatMessage({id});
        };

        return (
            <div>
                <Header/>
                <MainCover/>

                {/*Latest Albums Area Start*/}
                <section className="latest-albums-area section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading style-2">
                                    <p>See what’s new</p>
                                    <h2>Latest Albums</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-9">
                                <div className="ablums-text text-center mb-70">
                                    <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu
                                        quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus.
                                        Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at
                                        ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque
                                        et non eros.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="albums-slideshow owl-carousel">
                                    {/*Single Album*/}
                                    <div className="single-album">
                                        <img src="img/bg-img/a1.jpg" alt=""/>
                                        <div className="album-info">
                                            <a href="#">
                                                <h5>The Cure</h5>
                                            </a>
                                            <p>Second Song</p>
                                        </div>
                                    </div>

                                    {/*Single Album*/}
                                    <div className="single-album">
                                        <img src="img/bg-img/a2.jpg" alt=""/>
                                        <div className="album-info">
                                            <a href="#">
                                                <h5>Sam Smith</h5>
                                            </a>
                                            <p>Underground</p>
                                        </div>
                                    </div>

                                    {/*Single Album*/}
                                    <div className="single-album">
                                        <img src="img/bg-img/a3.jpg" alt=""/>
                                        <div className="album-info">
                                            <a href="#">
                                                <h5>Will I am</h5>
                                            </a>
                                            <p>First</p>
                                        </div>
                                    </div>

                                    {/*Single Album*/}
                                    <div className="single-album">
                                        <img src="img/bg-img/a4.jpg" alt=""/>
                                        <div className="album-info">
                                            <a href="#">
                                                <h5>The Cure</h5>
                                            </a>
                                            <p>Second Song</p>
                                        </div>
                                    </div>

                                    {/*Single Album*/}
                                    <div className="single-album">
                                        <img src="img/bg-img/a5.jpg" alt=""/>
                                        <div className="album-info">
                                            <a href="#">
                                                <h5>DJ SMITH</h5>
                                            </a>
                                            <p>The Album</p>
                                        </div>
                                    </div>

                                    {/*Single Album*/}
                                    <img src="img/bg-img/a6.jpg" alt=""/>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>The Ustopable</h5>
                                        </a>
                                        <p>Unplugged</p>
                                    </div>
                                </div>

                                {/*Single Album*/}
                                <div className="single-album">
                                    <img src="img/bg-img/a7.jpg" alt=""/>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Beyonce</h5>
                                        </a>
                                        <p>Songs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Latest Albums Area End*/}

                {/*Buy Now Area Start*/}
                <section className="oneMusic-buy-now-area has-fluid bg-gray section-padding-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading style-2">
                                    <p>See what’s new</p>
                                    <h2>Buy What’s New</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="100ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b1.jpg" alt=""/>
                                        {/* Album Price */}
                                        <div className="album-price">
                                            <p>$0.90</p>
                                        </div>
                                        {/*Play Icon*/}
                                        <div className="play-icon">
                                            <a href="#" className="video--play--btn"><span
                                                className="icon-play-button"></span></a>
                                        </div>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Garage Band</h5>
                                        </a>
                                        <p>Radio Station</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="200ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b2.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Noises</h5>
                                        </a>
                                        <p>Buble Gum</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="300ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b3.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Jess Parker</h5>
                                        </a>
                                        <p>The Album</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="400ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b4.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Noises</h5>
                                        </a>
                                        <p>Buble Gum</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="500ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b1.jpg" alt=""/>
                                        {/*Album Price*/}
                                        <div className="album-price">
                                            <p>$0.90</p>
                                        </div>
                                        {/*Play Icon*/}
                                        <div className="play-icon">
                                            <a href="#" className="video--play--btn"><span
                                                className="icon-play-button"></span></a>
                                        </div>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Garage Band</h5>
                                        </a>
                                        <p>Radio Station</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="600ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b2.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Noises</h5>
                                        </a>
                                        <p>Buble Gum</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="100ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b3.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Jess Parker</h5>
                                        </a>
                                        <p>The Album</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="200ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b4.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Noises</h5>
                                        </a>
                                        <p>Buble Gum</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="300ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b1.jpg" alt=""/>
                                        {/* Album Price*/}
                                        <div className="album-price">
                                            <p>$0.90</p>
                                        </div>
                                        {/*Play Icon*/}
                                        <div className="play-icon">
                                            <a href="#" className="video--play--btn"><span
                                                className="icon-play-button"></span></a>
                                        </div>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Garage Band</h5>
                                        </a>
                                        <p>Radio Station</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="400ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b2.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Noises</h5>
                                        </a>
                                        <p>Buble Gum</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="500ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b3.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Jess Parker</h5>
                                        </a>
                                        <p>The Album</p>
                                    </div>
                                </div>
                            </div>

                            {/*Single Album Area*/}
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                <div className="single-album-area wow fadeInUp" data-wow-delay="600ms">
                                    <div className="album-thumb">
                                        <img src="img/bg-img/b4.jpg" alt=""/>
                                    </div>
                                    <div className="album-info">
                                        <a href="#">
                                            <h5>Noises</h5>
                                        </a>
                                        <p>Buble Gum</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="load-more-btn text-center wow fadeInUp" data-wow-delay="300ms">
                                    <a href="#" className="btn oneMusic-btn">Load More <i
                                        className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Buy Now Area End*/}

                {/*Featured Artist Area Start*/}
                <section
                    className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed">   {/* style="background-image: url(img/bg-img/bg-4.jpg);" */}
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-12 col-md-5 col-lg-4">
                                <div className="featured-artist-thumb">
                                    <img src="img/bg-img/fa.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-8">
                                <div className="featured-artist-content">
                                    {/*Section Heading*/}
                                    <div className="section-heading white text-left mb-30">
                                        <p>See what’s new</p>
                                        <h2>Buy What’s New</h2>
                                    </div>
                                    <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu
                                        quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus.
                                        Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at
                                        ipsum ac, dignissim iaculis ante. Donec in velit non elit pulvinar pellentesque
                                        et non eros.</p>
                                    <div className="song-play-area">
                                        <div className="song-name">
                                            <p>01. Main Hit Song</p>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Featured Artist Area End*/}

                {/*Miscellaneous Area Star*/}
                <section className="miscellaneous-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            {/*Weeks Top*/}
                            <div className="col-12 col-lg-4">
                                <div className="weeks-top-area mb-100">
                                    <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                        <p>See what’s new</p>
                                        <h2>This week’s top</h2>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="100ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/wt1.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <h6>Sam Smith</h6>
                                            <p>Underground</p>
                                        </div>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="150ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/wt2.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <h6>Power Play</h6>
                                            <p>In my mind</p>
                                        </div>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="200ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/wt3.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <h6>Cristinne Smith</h6>
                                            <p>My Music</p>
                                        </div>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="250ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/wt4.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <h6>The Music Band</h6>
                                            <p>Underground</p>
                                        </div>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="300ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/wt5.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <h6>Creative Lyrics</h6>
                                            <p>Songs and stuff</p>
                                        </div>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div className="single-top-item d-flex wow fadeInUp" data-wow-delay="350ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/wt6.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <h6>The Culture</h6>
                                            <p>Pop Songs</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/*New Hits Songs*/}
                            <div className="col-12 col-lg-4">
                                <div className="new-hits-area mb-100">
                                    <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                        <p>See what’s new</p>
                                        <h2>New Hits</h2>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div
                                        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay="100ms">
                                        <div className="first-part d-flex align-items-center">
                                            <div className="thumbnail">
                                                <img src="img/bg-img/wt7.jpg" alt=""/>
                                            </div>
                                            <div className="content-">
                                                <h6>Sam Smith</h6>
                                                <p>Underground</p>
                                            </div>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div
                                        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay="150ms">
                                        <div className="first-part d-flex align-items-center">
                                            <div className="thumbnail">
                                                <img src="img/bg-img/wt8.jpg" alt=""/>
                                            </div>
                                            <div className="content-">
                                                <h6>Power Play</h6>
                                                <p>In my mind</p>
                                            </div>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div
                                        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay="200ms">
                                        <div className="first-part d-flex align-items-center">
                                            <div className="thumbnail">
                                                <img src="img/bg-img/wt9.jpg" alt=""/>
                                            </div>
                                            <div className="content-">
                                                <h6>Cristinne Smith</h6>
                                                <p>My Music</p>
                                            </div>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div
                                        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay="250ms">
                                        <div className="first-part d-flex align-items-center">
                                            <div className="thumbnail">
                                                <img src="img/bg-img/wt10.jpg" alt=""/>
                                            </div>
                                            <div className="content-">
                                                <h6>The Music Band</h6>
                                                <p>Underground</p>
                                            </div>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div
                                        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay="300ms">
                                        <div className="first-part d-flex align-items-center">
                                            <div className="thumbnail">
                                                <img src="img/bg-img/wt11.jpg" alt=""/>
                                            </div>
                                            <div className="content-">
                                                <h6>Creative Lyrics</h6>
                                                <p>Songs and stuff</p>
                                            </div>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>

                                    {/*Single Top Item*/}
                                    <div
                                        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                                        data-wow-delay="350ms">
                                        <div className="first-part d-flex align-items-center">
                                            <div className="thumbnail">
                                                <img src="img/bg-img/wt12.jpg" alt=""/>
                                            </div>
                                            <div className="content-">
                                                <h6>The Culture</h6>
                                                <p>Pop Songs</p>
                                            </div>
                                        </div>
                                        <audio preload="auto" controls>
                                            <source src="audio/dummy-audio.mp3"/>
                                        </audio>
                                    </div>
                                </div>
                            </div>

                            {/*Popular Artists*/}
                            <div className="col-12 col-lg-4">
                                <div className="popular-artists-area mb-100">
                                    <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                        <p>See what’s new</p>
                                        <h2>Popular Artist</h2>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="100ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa1.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>Sam Smith</p>
                                        </div>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="150ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa2.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>William Parker</p>
                                        </div>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="200ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa3.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>Jessica Walsh</p>
                                        </div>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="250ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa4.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>Tha Stoves</p>
                                        </div>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="300ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa5.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>DJ Ajay</p>
                                        </div>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="350ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa6.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>Radio Vibez</p>
                                        </div>
                                    </div>

                                    {/*Single Artist*/}
                                    <div className="single-artists d-flex align-items-center wow fadeInUp"
                                         data-wow-delay="400ms">
                                        <div className="thumbnail">
                                            <img src="img/bg-img/pa7.jpg" alt=""/>
                                        </div>
                                        <div className="content-">
                                            <p>Music 4u</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Miscellaneous Area End*/}

                {/*Contact Area Start*/}
                <section
                    className="contact-area section-padding-100 bg-img bg-overlay bg-fixed has-bg-img">    {/* style="background-image: url(img/bg-img/bg-2.jpg);" */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading white wow fadeInUp" data-wow-delay="100ms">
                                    <p>See what’s new</p>
                                    <h2>Get In Touch</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                {/*Contact Form Area*/}
                                <div className="contact-form-area">
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="form-group wow fadeInUp" data-wow-delay="100ms">
                                                    <input type="text" className="form-control" id="name"
                                                           placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="form-group wow fadeInUp" data-wow-delay="200ms">
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="E-mail"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group wow fadeInUp" data-wow-delay="300ms">
                                                    <input type="text" className="form-control" id="subject"
                                                           placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group wow fadeInUp" data-wow-delay="400ms">
                                                            <textarea name="message" className="form-control"
                                                                      id="message"
                                                                      cols="30" rows="10"
                                                                      placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="500ms">
                                                <button className="btn oneMusic-btn mt-30" type="submit">Send <i
                                                    className="fa fa-angle-double-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Contact Area End */}

                {/*Footer Area Start*/}
                <footer className="footer-area">
                    <div className="container">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-12 col-md-6">
                                <a href="#"><img src="img/core-img/logo.png" alt=""/></a>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="footer-nav">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Albums</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
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