import React, { Component } from "react";

export class SearchForm extends Component {
	state = {
		inputMovie: ""
	};

	_handleChange = event => {
		this.setState({ inputMovie: event.target.value });
	};

	_handleSubmit = event => {
		event.preventDefault(); //prevent the native browser event when the form is submitted
		alert(this.state.inputMovie);
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
