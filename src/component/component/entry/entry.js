import React, { Component } from "react";
import "./Entry.css";

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLoaded: false
    };
  }

  handleVideoLoad = () => {
    this.setState({ videoLoaded: true });
  };

  render() {
    return (
      <div className={`EntryContainer ${this.state.videoLoaded ? 'loaded' : ''}`}>
        <div className="MyEntry">
          <img src="/assets/Untitled.gif" autoPlay muted loop onCanPlayThrough={this.handleVideoLoad}></img>
        </div>
        <div className="text">
          <img className="yvidhText" src="/assets/Untitled-1.png" alt="Yivdh"/>
        </div>
      </div>
    );
  }
}
