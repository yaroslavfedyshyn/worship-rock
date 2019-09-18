import React from "react";

import MainCoverImg from '../../../../src/img/bg-img/bg-2.jpg'

const MainCover = (props) => {

    const styles =  {
        backgroundImage: `url(${MainCoverImg})`
    };

    return (
        <section className="hero-area">
            <div className="hero-slides owl-carousel">

                { /* Single Hero Slide */}

                <div className="single-hero-slide d-flex align-items-center justify-content-center">
                    {/* Slide Img */}
                    <div className="slide-img bg-img"></div>
                    {/* style="background-image: url(img/bg-img/bg-1.jpg);" */}
                    {/* Slide Content */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slides-content text-center">
                                    <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                    <h2 data-animation="fadeInUp" data-delay="300ms">Beyond Time <span>Beyond Time</span>
                                    </h2>
                                    <a data-animation="fadeInUp" data-delay="500ms" href="#"
                                       className="btn oneMusic-btn mt-50">Discover <i
                                        className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Single Hero Slide */}
                <div className="single-hero-slide d-flex align-items-center justify-content-center">
                    {/* Slide Img */}
                    <div className="slide-img bg-img" style={styles}></div>

                    {/* Slide Content */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slides-content text-center">
                                    <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                    <h2 data-animation="fadeInUp" data-delay="300ms">Colorlib Music <span>Colorlib Music</span>
                                    </h2>
                                    <a data-animation="fadeInUp" data-delay="500ms" href="#"
                                       className="btn oneMusic-btn mt-50">Discover <i
                                        className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MainCover;