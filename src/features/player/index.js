import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './player_walk.png';
import handleAction from './action';

function Player(props) {
	return(
		<div
			style={{
				position: 'absolute',
				top: props.position[1],
				left: props.position[0],
				backgroundImage: `url("${walkSprite}")`,
				backgroundPosition: '0 0',
				width: '40px',
				height: '40px',
			}}
		></div>
	);
}

function mapStateToProps(state) {
	return {
		...state.player
	};
}

export default connect(mapStateToProps)(handleAction(Player));