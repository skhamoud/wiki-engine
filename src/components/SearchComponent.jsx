import React, { Component } from "react";
// import { Link } from "react-router-dom";

import btn from "../assets/search-btn.svg"


const SearchButton = (props) => {
  return (
      <div className={`search-btn ${props.visible || ''}`} onClick={props.onClick} >
        <img src={btn} alt="searchButton"  />
      </div>
	);
}

class SearchComponent extends Component {
  constructor(props) {
		super(props); 
		this.state = { modalVisible: false };
		
    this.handleSearch = this.handleSearch.bind(this);
		this.handleButtonClick= this.handleButtonClick.bind(this);
  }
	render() {
		const searchInputVisible = this.state.modalVisible ? 'visible' : 'hidden';
		const searchButtonVisible = this.state.modalVisible ? 'hidden' : 'visible';
		return (
			<div>
				<SearchButton onClick={this.handleButtonClick} visible={searchButtonVisible} />
				
				<div className={`searchbox ${searchInputVisible}`} >
					<Modal onClick={this.handleButtonClick}/>
					<input type="text" name="search" placeholder="Article"
							ref={input => this.searchTextInput = input}
							onKeyPress={this.handleSearch}
							className={`search-input`} />
				</div>
				
			</div>);
  }
  handleSearch(e) {
    let term = this.searchTextInput.value || "";
    if(e.key === "Enter" ) this.props.onSearch(term);

	}
	handleButtonClick() {
		this.setState((prevState, props) => ({modalVisible:!prevState.modalVisible}))
		console.log(this.state.modalVisible)
	}
}

const Modal = (props) => (
	<div className="modal-bg" onClick={props.onClick || null} ></div>)

export default SearchComponent;