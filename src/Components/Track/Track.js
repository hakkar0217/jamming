﻿import React from 'react';
import './Track.css';

class Track extends React.Component {
	contructor(props) {
		super(props);
	}

	renderAction() {
		if (this.props.isRemoval) {
			return <a className='Track-action' onClick=+</a>;
			} else {
				return <a className='Track-action' onClick=-</a>;
			}
	}
	
	render() {
		return (
			<div className="Track">
  				<div className="Track-information">
    				<h3><//track name will go here</h3>
    				<p>//<track artist will go here--> | <track album will go here></p>
  				</div>
  					<a className="Track-action">//< + or - will go here ></a>
			</div>
		)
	}
}

export default Track;