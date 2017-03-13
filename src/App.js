import React, { Component } from 'react';
import Articles from './components/Articles';
import Api from "./api";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles : [ ] ,
      extracts:[] ,
      urls:[]
    };
  }
  componentWillMount() {
    // Api.wikiSearch('obama').then(data => {
    //   this.setState(data);
    //   console.log(this.state);
    // });
    // while offline use dummyData
    let data = Api.dummyData;
    this.setState({
      titles: data[1],
      extracts: data[2],
      urls: data[3]
    });
  }
  render() {
    const data = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        {/* Search results */}
        <Articles data={data} />

      </div>
    );
  }
}

export default App;
