/*global chrome*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Bookmark from './Bookmark';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
    chrome.bookmarks.getTree(node => {
      let bookmarks = node[0].children[0].children;
      this.setState({ bookmarks });
      console.log('foo');
    });
  }

  render() {
    return (
      <div>
        foo
        <Bookmark bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default App;
