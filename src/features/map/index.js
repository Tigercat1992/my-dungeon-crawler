import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';
import './style.css';

function getTileSprite(type) {
	switch(type) {
		case 0:
			return 'gress';
		case 1:
			return 'chest';
		case 3:
			return 'tree';
		case 5:
			return 'rock';
		case 6:
			return 'tree';
		default:
			return '';
	}
}

function MapTile(props) {
	return <div 
		className={`tile ${getTileSprite(props.tile)}`}
		style={{
			height: SPRITE_SIZE,
			width: SPRITE_SIZE,
		}}
	/>
}

function MapRow(props) {
	return <div 
	className="row"
		style={{
      height: SPRITE_SIZE,
    }}
	>
		{
			props.tiles.map( (tile, i) => <MapTile tile={tile} key={i} /> )
		}
	</div>
}

function Map(props) {
	return(
		<div
			style={{
				position: 'relative',
				top: 0,
				left: 0,
				width: MAP_WIDTH,
				height: MAP_HEIGHT,
				border: '2px solid white',
			}}
		>
			{
				props.tiles.map( (row, i) => <MapRow tiles={row} key={i} /> )
			}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		tiles: state.map.tiles,
	};
}

export default connect(mapStateToProps)(Map);