import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {


	const name = useSelector(state => state.name);
	const fam = useSelector(state => state.fam);

	

	return (
		<div>

			<div>
				name: {name}
			</div>
			<div>
				fam: {fam}
			</div>
		</div>
	)
}
