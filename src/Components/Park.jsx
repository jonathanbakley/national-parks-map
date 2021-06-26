import React from 'react';
import { Entity } from 'resium';
import { Cartesian3, Color } from 'cesium';

const Park = ({ park }) => {
	return (
		<Entity
			point={{
				pixelSize: 6,
				color: park.visited ? Color.GREEN : Color.RED,
			}}
			position={Cartesian3.fromDegrees(park.lon, park.lat, 0)}
		/>
	);
};

export default Park;
