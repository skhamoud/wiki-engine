// packages
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components and custom helpers
import Api from "./api";
import Home from './pages/Home';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
// Assets and styles
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles : [ ] ,
      extracts:[] ,
      urls: []
    };
    this.getArticles = this.getArticles.bind(this);
  }
  // Custom Functions
  getArticles(term) {
    Api.wikiSearch(term).then(data => {
      this.setState({
        titles: data[1],
        extracts: data[2],
        urls: data[3]
      });
    });
  }

  // Lifecycle components 
  componentWillMount() {
    // while offline use dummyData

    // let data = Api.dummyData;
    // this.setState({
    //   titles: data[1],
    //   extracts: data[2],
    //   urls: data[3]
    // });
  }
  componentDidMount() {
    
  }
  componentDidUpdate() {
    
  }
  render() {
    const data = this.state;
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/' render={() => (
            <Home fetchArticles={this.getArticles} />
          )} />
          <Route path="/articles" render={() => (
            <Articles data={data} fetchArticles={this.getArticles}/>
          )} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
// TODO: 
// ADD RANDOM BUTTON
// 


export default App;