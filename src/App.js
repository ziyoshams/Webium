import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';
import MainHero from './components/MainHero/MainHero';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="container is-fluid is-marginless" style={{padding: '0px 15px'}}>
        <Header />
        <Navigation />
        <MainHero/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
