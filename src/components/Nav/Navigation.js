import React from 'react';
import './navigation.css';

const Navigation = () => {
  let nav = [
    'HOME',
    'CULTURE',
    'TECH',
    'ENTREPRENEURSHIP',
    'SELF',
    'POLITICS',
    'DESIGN',
    'SCIENCE',
    'POPULAR',
    'MORE'
  ];
  return (
    <nav className="container navbar level is-mobile scrollable">
      {nav.map((elem) => {
        return <a key={elem} className="navbar-item is-size-7" href={`categories/${elem.toLowerCase()}`}>{elem}</a>
      })}
      <a href="" />
    </nav>
  );
};

export default Navigation;
