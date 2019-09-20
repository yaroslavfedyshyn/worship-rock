import React from 'react';

const MenuItem = (props) => {
  const {
    title,
    path,
  } = props;

  return (
    <li key={title}><a href={path}>{title}</a></li>
  );
};

export default MenuItem;
