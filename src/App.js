import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className="container is-fluid" style={{ margin: '0px 10px' }}>
        <Header />
        <Navigation />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
