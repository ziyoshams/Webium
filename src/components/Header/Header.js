import React from 'react';

const Header = () => {
  return (
    <div className="container" style={{ marginTop: 10 }}>
      <div className="columns level is-mobile">
        <div className="column has-text-left">
          <img src="./webium_logo.svg" className="is-hidden-mobile" style={{ height: 35 }} />
          <img src="./mobile_logo.svg" className="is-hidden-tablet" style={{ height: 35 }} />
        </div>
        <div className="column">
          <div className="level is-mobile" style={{justifyContent: 'flex-end'}}>
            <div className="level-item">
              <a href="#" className="icon is-size-7 has-text-grey-light">
                <span className="fas fa-search" />
              </a>
            </div>
            <div className="is-hidden-mobile level-item has-text-centered">
            <a href="#" className="link is-size-7 has-text-grey-light">Become a member</a>
            </div>
            <div className="is-hidden-mobile level-item has-text-centered">
              <a href="#" className="link is-size-7 is-info has-text-primary">Sign in</a>
            </div>
            <div className="level-item is-pulled-right">
              <a href="#" className="button is-size-7 is-primary is-outlined">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;                                            