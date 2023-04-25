import React from 'react'
import { Link } from 'react-router-dom'

const Parking = (props) => {
	return (
		<div
			className={`parking-spot ${
				props.status == 'free' ? 'free' : 'taken-nfu'
			}`}
		>
			<p className='parking-spot-number parking-spot-props'>{props.number}</p>
			<p className='parking-spot-status parking-spot-props'>{props.status}</p>
			{props.status == 'free' ? (
				<p className='time'>free until {props.time}</p>
			) : null}
			{props.status == 'not for use' ? (
				<button className='park-btn'>
					<Link
						className='router-link'
						to={`/parking-form/${props.complexId}/${props.id}`}
					>
						<p>Free Your Spot</p>
					</Link>
				</button>
			) : null}
		</div>
	)
}

export default Parking
