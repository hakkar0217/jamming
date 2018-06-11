import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { searchResults: ['name', 'artist', 'album', 'id']};
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
