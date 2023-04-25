import React from 'react'

import Parking from './Parking'

const Complex = (props) => {
	const ParkingUI = CreateParkingUI()
	//Create All Parking Spots
	function CreateParkingUI() {
		if (props.parkingSpots) {
			return props.parkingSpots.map((park) => {
				return (
					<Parking
						key={park.id}
						id={park.id}
						complexId={props.id}
						number={park.number}
						owner={park.owner}
						status={park.status}
						time={park.time}
					/>
				)
			})
		} else {
			return
		}
	}
	return (
		<div className='complex'>
			<h1>Complex ID: {props.id}</h1>
			<div className='parking-spots-cont'>{ParkingUI}</div>
		</div>
	)
}

export default Complex
