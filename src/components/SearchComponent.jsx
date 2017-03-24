// ============Modules==========
import React, { Component } from "react";
import { Route } from "react-router-dom";
// ========components =========
import TextInput from './TextInputComponent';
// ================Assets============
import btn from "../assets/search-btn.svg"

// searchButton 
const SearchButton = (props) => {
  return (
      <div className={`search-btn ${props.visible || ''}`} onClick={props.onClick} >
        <img src={btn} alt="searchButton"  />
      </div>
	);
}

// Modal
const Modal = (props) => (
	<div className="modal-bg" onClick={props.onClick || null} ></div>)

// SearchComponent
class SearchComponent extends Component {
  constructor(props) {
		super(props); 
		this.state = { modalVisible: false };
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
					<Route render={({ history }) => (
						<TextInput onSearch={this.props.onSearch} navigateTo={history.push} />
					)} />
				</div>

			</div>);
  }
	handleButtonClick() {
		this.setState((prevState, props) => ({modalVisible:!prevState.modalVisible}))
	}
}
export default SearchComponent;

