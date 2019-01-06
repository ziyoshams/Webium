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
    <div className="navigation">
      <button className="navigation_arrow is-hidden-tablet">{'<'}</button>
      <nav className="container navbar level is-mobile is-marginless scrollable">
        {nav.map(elem => {
          return (
            <a
              key={elem}
              className="navbar-item is-size-7"
              href={elem.toLowerCase() === 'home' ? `/` : `categories/${elem.toLowerCase()}`}
            >
              {elem}
            </a>
          );
        })}
      </nav>
      <button className="navigation_arrow is-hidden-tablet">{'>'}</button>
    </div>
  );
};

export default Navigation;
