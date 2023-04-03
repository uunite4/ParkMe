import React from 'react'

import Complex from '../components/Complex'

const Main = (props) => {
	const complexUI = CreateComplexUI()
	function CreateComplexUI() {
		if (props.allData) {
			return props.allData.map((complex) => {
				return (
					<Complex
						key={complex.id}
						id={complex.id}
						buildings={complex.includesBuildings}
						parkingSpots={complex.parkingSpots}
					/>
				)
			})
		} else {
			return
		}
	}
	return (
		<>
			{props.loading ? (
				<h1>LOADING</h1>
			) : (
				<div className='complex-ui-cont'>{complexUI}</div>
			)}
		</>
	)
}

export default Main
