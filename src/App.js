import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MoviesList } from "./components/MoviesList";
import { Detail } from "./pages/Detail"

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults = () => {
    return this.state.results.length === 0 ? (
      <p>Sorry! Results not found!</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    const url = new URL(document.location) //current page direction
    const hasId = url.searchParams.has('id')


    /*
      conditional render
    */
    if(hasId) {
      return <Detail id={url.searchParams.get('id')} />
    } 

    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}

export default App;
