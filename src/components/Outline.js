import React from 'react';
import { Loader } from './Loader';
import '../style/Outline.css';

export const Outline = ({ outline }) => {
	if (outline === 'outline loading...') {
		return (
			<div className="outline">
				<Loader />
			</div>
		);
	}
	return (
		<div className="outline">
			<h4 className="placeholder">{!!outline ? null : 'Spresso Text-Outline\n v.1.0.0'}</h4>
			<h3>
					{!outline ? null : outline.title}
			</h3>
			<p>{!outline ? null : outline.text}</p>
		</div>
	);
};
