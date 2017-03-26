// ============Modules==================
import React, { Component } from "react";
import { Route } from "react-router-dom";
// ========components ===================
import TextInput from './TextInputComponent';
import SearchButton from './SearchButton';



// ==============SearchComponent==============
// needs 2 props:
// - onSearch: function
// - btnContainer: className for page spefic container of the btn

class SearchComponent extends Component {
  constructor(props) {
		super(props); 
		this.state = { modalVisible: false };
		this.toggleModal = this.toggleModal.bind(this);
	}
	
	render() {
		const searchInputVisible = this.state.modalVisible ? 'visible' : 'hidden';
		const searchButtonVisible = this.state.modalVisible ? 'hidden' : 'visible';
		return (
			<div>
				<SearchButton
					onClick={this.toggleModal}
					visible={searchButtonVisible}
					btnContainer={this.props.btnContainer||''}
				/>

				<div className={`searchbox ${searchInputVisible}`} >
					<Modal onClick={this.toggleModal} />
					
					{/*Wrap TextInput in router to pass history to it*/}
					<Route render={({ history }) => (
						<TextInput onSearch={this.props.onSearch}
							navigateTo={(place) => {
							history.push(place)
							this.setState({modalVisible:false})
						}} />
					)} />
				</div>

			</div>);
	}
	
	toggleModal() {
		this.setState((prevState, props) => ({modalVisible:!prevState.modalVisible}))
	}
}

// ===============Modal====================
/**
 * needs onClick prop : function that fires when you click anywhere in modal
 *  
 */
const Modal = (props) => <div className="modal-bg" onClick={props.onClick || null} ></div>;

export default SearchComponent;