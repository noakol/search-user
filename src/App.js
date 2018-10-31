import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchUser from './components/searchUser.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchUser />
      </div>
    );
  }
}

export default App;
