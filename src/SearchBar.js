import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };
  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
        {this.state.term}
      </div>
    );
  }
}
