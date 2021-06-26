import React from 'react';
import { Viewer } from 'resium';

import './Map.css';
import Park from './Park';

const parks = [
	{
		name: 'Rocky Mountain National Park',
		lon: -105.688103,
		lat: 40.343182,
		state: 'Colorodo',
		visited: false,
		visitDate: '',
	},
	{
		name: 'Great Smoky Mountains National Park',
		lon: -83.489548,
		lat: 35.611763,
		state: 'Tennessee',
		visited: true,
		visitDate: '',
	},
];

function Map(props) {
	return (
		<Viewer
			className='viewer'
			scene3DOnly={true}
			homeButton={false}
			navigationInstructionsInitiallyVisible={false}
			animation={false}
			timeline={false}
			fullscreenButton={false}
			navigationHelpButton={false}
		>
			{parks.map((park) => (
				<Park key={park.name} park={park} />
			))}
		</Viewer>
	);
}

export default Map;
