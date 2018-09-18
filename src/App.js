import React, { Component } from 'react';
import './App.css';
import Tiles from './component/Tiles';
import ShowContent from './component/ShowContent';
import AddPost from './component/AddPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tiles />
        <ShowContent />
        <AddPost />
      </div>
    );
  }
}

export default App;
