import React from 'react'

const Parking = (props) => {
	return (
		<div
			className={`parking-spot ${
				props.status == 'free' ? 'free' : 'taken-nfu'
			}`}
		>
			<p className='parking-spot-number parking-spot-props'>{props.number}</p>
			<p className='parking-spot-status parking-spot-props'>{props.status}</p>
		</div>
	)
}

export default Parking
