import React, { Component } from "react";

const API_KEY = "19528dfd";
export class SearchForm extends Component {
	state = {
		inputMovie: ""
	};

	_handleChange = event => {
		this.setState({ inputMovie: event.target.value });
	};

	_handleSubmit = event => {
		event.preventDefault(); //prevent the native browser event when the form is submitted
		//alert(this.state.inputMovie);

		/*
			Fetch is a native method with an added react polyfill.
			The first parameter is the url where is the request is going to be.

			Because the fetch method is asynchronous, the code does not wait for a response from the web service. 
			therefore the method returns a promise and is a necessary use the method .then
		*/
		const { inputMovie } = this.state;
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
			.then(response => response.json())
			.then(results => {

				const {Search = [], totalResults = '0'} = results
				console.log({Search, totalResults});
				this.props.onResults(Search)
			});
	};

	render() {
		return (
			<form onSubmit={this._handleSubmit}>
				<div className="field has-addons">
					<div className="control">
						<input
							className="input"
							onChange={this._handleChange} //is executed every time that is a change in the input
							type="text"
							placeholder="Movie to search..."
						/>
					</div>
					<div className="control">
						<button className="button is-info">Search</button>
					</div>
				</div>
			</form>
		);
	}
}
