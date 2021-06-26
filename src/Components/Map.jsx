import React from 'react';
import { Viewer, Entity, EntityDescription } from 'resium';
import { Cartesian3 } from 'cesium';

function Map(props) {
	return (
		<div>
			<Viewer>
				<Entity
					point={{ pixelSize: 10 }}
					position={Cartesian3.fromDegrees(-78, 35, 0)}
				>
					<EntityDescription>Hello</EntityDescription>
				</Entity>
			</Viewer>
		</div>
	);
}

export default Map;
