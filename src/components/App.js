import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    const res = await youtube.get(`/search`, {
      params: {
        q: term
      }
    });
    console.log(res);
    this.setState({
      videos: res.data.items
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />I have:{" "}
        {/* {this.state.videos.length} videos. */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
