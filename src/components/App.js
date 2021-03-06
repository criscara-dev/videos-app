import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("Hello everyone Lucia G");
  }
  onTermSubmit = async term => {
    const res = await youtube.get(`/search`, {
      params: {
        q: term
      }
    });
    // console.log(res);
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };
  onVideoSelect = video => {
    console.log("from the video:", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            {/* {this.state.videos.length} videos. */}
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
