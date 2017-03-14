import React from 'react'
import {Route, Link} from 'react-router-dom'
import SearchComponent from './components/SearchComponent';
import Articles from './components/Articles';
import Api from "./api";
import SearchButton from './components/SearchButton.jsx';
// Assets 
import logo from './logo.svg';
import bgImage from './assets/books.jpg' ;
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles : [ ] ,
      extracts:[] ,
      urls:[]
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
      console.log(this.state);
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
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/search' component={SearchComponent} />
          <Route path="/articles" component={Articles} />
        </div>
        
        //  {/*Search results 
        // <SearchComponent onSearch={this.getArticles} />
        // <Articles data={data} />*/}

   
    );
  }
}

function Home (props){
  const homeStyle = {
    background: `url(${bgImage}) center / cover`,
    height: "100vh",
  }
  return (
    <div style={homeStyle} >  
      <div className='container container_home-search-btn'>
        <div className="row">
          <div className="three columns">
              <SearchButton  />
          </div>
        </div>
      </div>
        
      </div>
    );
}

export default App;
