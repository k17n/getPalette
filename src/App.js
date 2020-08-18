import React, { Component } from 'react';
import Header from './client/components/Header/Header';
import Previews from './client/components/ImageSection/Previews';
import CardInput from './client/components/ImageSection/CardInput';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:'',
      imageURL:''
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
  }

  render(){
    return (
      <div className="container-fluid p-0">
        <div className="App mt-3 mx-5">
          <Header />
          <Previews />
          <CardInput onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} imageURL={this.state.imageURL}/>
        </div>
      </div>
    );
  }
}

export default App;
