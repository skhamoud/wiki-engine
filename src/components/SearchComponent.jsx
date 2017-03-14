import React, { Component } from "react";



class SearchComponent extends Component {
  constructor(props) {
    super(props); 
    this.handleSearch = this.handleSearch.bind(this);
		// this.handleIconClick= this.handleIconClick.bind(this);
  }
  render() {
    return (
			<div className='searchbox'>
				
				
				<input type="search" 
						 name="search"
						 placeholder="Article"
						 ref={input => this.searchTextInput = input}
						 onKeyPress={this.handleSearch}/>
				
			</div>);
  }
  handleSearch(e) {
    let term = this.searchTextInput.value || "";
    if(e.key === "Enter" ) this.props.onSearch(term);

  }
	handleIconClick(){
		let cssClass = this.searchTextInput.className;
		this.searchTextInput.className='visible';
	}
}

export default SearchComponent;