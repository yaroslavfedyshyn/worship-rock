import React from 'react';

const Index = () => {
  const section = 'Nece section';

  const items = [
    {
      singer: 'Petro',
      song: 'Lolite',
      imgSrc: require('../../img/bg-img/wt8.jpg'),
    }, {
      singer: 'Artur',
      song: 'More',
      imgSrc: require('../../img/bg-img/wt7.jpg'),
    }, {
      singer: 'Anna',
      song: 'Pierre',
      imgSrc: require('../../img/bg-img/wt6.jpg'),
    }, {
      singer: 'John',
      song: 'Forest',
      imgSrc: require('../../img/bg-img/wt4.jpg'),
    },
  ];

  const renderItems = (item, index) => {
    const {
      singer,
      song,
      imgSrc,
    } = item;

    return (
      <div
        className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
        data-wow-delay="100ms"
        key={index}
      >
        <div className="first-part d-flex align-items-center">
          <div className="thumbnail">
            <img src={imgSrc} alt="" />
          </div>
          <div className="content-">
            <h6>{singer}</h6>
            <p>{song}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-12 col-lg-4">
      <div className="new-hits-area mb-100">
        <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
          <p>See what’s new</p>
          <h2>{section}</h2>
        </div>
        {items.map((item, index) => renderItems(item, index))}
      </div>
    </div>
  );
};

export default Index;
