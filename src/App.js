import React, { Component } from 'react';
import Header from './client/components/Header/Header';
import ImageSection from './client/components/ImageSection/ImageSection';

class App extends Component{
  render(){
    return (
      <div className="container-fluid p-0">
        <div className="App mt-3 mx-5">
          <Header />
          <ImageSection />
        </div>
      </div>
    );
  }
}

export default App;
