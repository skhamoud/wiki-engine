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
      urls: [],
      errorMsg : ''
    };
    this.getArticles = this.getArticles.bind(this);
  }

  // Custom Functions
  getArticles(term) {
    Api.wikiSearch(term).then(data => {
      // if the fetch resolves
      if (data) {
        this.setState((prevState, props) => {
          return (data[1][0] !== prevState.titles[0]) ?
          // if the fetch returns actual data
            {
              titles: data[1],
              extracts: data[2],
              urls: data[3],
              errorMsg: null
            } : // if not give back noResults error
            { errorMsg: Api.errors.noResults }
        })
      }
      // Fetch failed : network problem
      else this.setState({ errorMsg: Api.errors.network })
    });
  }

  // Lifecycle components 
  componentWillMount() {

  }
  componentDidMount() {
    
  }
  componentDidUpdate() {

  }
  render() {
    const data = this.state;
    console.log(data);
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/' render={() => (
            <Home fetchArticles={this.getArticles} />
          )} />
          <Route exact path="/articles" render={() => (
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