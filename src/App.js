import React, { Component } from 'react';
import Header from './client/components/Header/Header';

class App extends Component{
  render(){
    return (
      <div className="container-fluid p-0">
        <div className="App m-5">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
