import React from 'react';

const Header = () => {
  return (
    <div className="container" style={{ marginTop: 10 }}>
      <div className="columns level is-mobile">
        <div className="column is-hidden-mobile has-text-left">
          <a className="link has-text-grey-light">Become a member</a>
        </div>
        <div className="column  has-text-centered has-text-left-mobile">
          <img src="./webium_logo.svg" style={{ height: 40 }} />
        </div>
        <div className="column">
          <div className="level is-mobile" style={{justifyContent: 'flex-end'}}>
            <div className="level-item">
              <a className="icon has-text-grey-light">
                <span className="fas fa-search" />
              </a>
            </div>
            <div className="is-hidden-mobile level-item has-text-centered">
              <a className="link is-info has-text-primary">Sign in</a>
            </div>
            <div className="level-item is-pulled-right">
              <a className="button is-primary is-outlined">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
