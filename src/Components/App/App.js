import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Plyalist from '../Plyalist/Plyalist';

class App extends Component {
	contructor(props) {
		super(props);
		
		this.state = searchResults{(name, artist, album, id)};
	}
  render() {
    return (
		<div>
  			<h1>Ja<span className="highlight">mmm</span>ing</h1>
  		<div className="App">
    		<SearchBar />
    		<div class="App-playlist">
      	<SearchResult />
      	<Playlist />
    		</div>
  		</div>
	</div>    );
  }
}

export default App;
