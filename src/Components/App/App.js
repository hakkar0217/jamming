import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			searchResults: [],
			playlistName: 'New Playlist',
			playlistTracks: []
		};
		
		this.search = this.search.bind(this);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		
	}

	// Searches to Spotify
	search(term) {
		Spotify.search(term).then(searchResults => {
		this.setState({searchResults: searchResults});
	  });
	}	
	
	// Adds tracks to the playlist and check for duplicates
	addTrack(track) {
		let tracks = this.state.playlistTracks;		
			if (this.state.playlistTracks.find(playlistTrack =>
			  track.id === playlistTrack.id)) {		
				return;
		} else {
				tracks.push(track)						
				this.setState({playlistTracks: tracks})
		}
	}
	
	// Removes from the playlist
	removeTrack(track) {
		let tracks = this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
		
		this.setState({playlistTracks: tracks});
	}
	
	// Updating the playlist names
	updatePlaylistName(name) {
		this.setState({playlistName: name});
	}
	
	// To save the playlist to the user account
	savePlaylist()	{
		const trackUris = this.state.playlistTracks.map(track => track.uri);
		Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
			this.setState({
				playlistName: 'New Playlist',
				playlistTracks: []
			});			
		});
	}
	
	
  render() {
    return (
		<div>
  			<h1>Ja<span className="highlight">mmm</span>ing</h1>
  			<div className="App">
    			<SearchBar onSearch={this.search} />
    			<div className="App-playlist">
      		<SearchResults searchResults={this.state.searchResults}
      							onAdd={this.addTrack} />
      		<Playlist 	playlistTracks={this.state.playlistTracks}
      						onNameChange={this.updatePlaylistName}
      						onRemove={this.removeTrack}
      						onSave={this.savePlaylist} />
    			</div>
  			</div>
		</div>    
	 );
  }
}

export default App;
